namespace BookShop
{
    using Data;
    using Initializer;
    using System;
    using System.Globalization;
    using System.Linq;
    using System.Text;

    public class StartUp
    {
        public static void Main()
        {
            using var db = new BookShopContext();
            DbInitializer.ResetDatabase(db);
        }
        //2. Age Restriction
        public static string GetBooksByAgeRestriction(BookShopContext context, string command)
        {
            var bookTitles = context.Books.ToList()
                .Where(b => b.AgeRestriction.ToString().ToLower() == (command).ToLower())
                .Select(b => b.Title)
                .OrderBy(b => b);
            var result = new StringBuilder();
            foreach (var book in bookTitles)
            {
                result.AppendLine(book);
            }
            return result.ToString().TrimEnd();
        }
        //3. Golden Books
        public static string GetGoldenBooks(BookShopContext context)
        {
            var result = new StringBuilder();

            var golderBooks = context.Books.ToList()
                .Where(b => b.Copies < 5000 && b.EditionType.ToString() == "Gold")
                .Select(b => new
                {
                    b.BookId,
                    b.Title
                })
                .OrderBy(b => b.BookId);
            foreach (var book in golderBooks)
            {
                result.AppendLine($"{book.Title}");
            }

            return result.ToString().TrimEnd();
        }
        //4. Books by Price
        public static string GetBooksByPrice(BookShopContext context)
        {
            var books = context.Books.ToList()
                .Where(b => b.Price > 40)
                .Select(b => new
                {
                    b.Title,
                    b.Price
                })
                .OrderByDescending(b => b.Price);
            var result = new StringBuilder();
            foreach (var book in books)
            {
                result.AppendLine($"{book.Title} - ${book.Price:f2}");
            }
            return result.ToString().TrimEnd();
        }
        //5. Not Released In
        public static string GetBooksNotReleasedIn(BookShopContext context, int year)
        {
            var result = new StringBuilder();

            var books = context.Books.ToList()
                .Where(b => b.ReleaseDate.Value.Year != year)
                .Select(b => new
                {
                    b.Title,
                    b.BookId
                })
                .OrderBy(b => b.BookId);

            foreach (var b in books)
            {
                result.AppendLine($"{b.Title}");
            }

            return result.ToString().TrimEnd();
        }
        //6. Book Titles by Category
        public static string GetBooksByCategory(BookShopContext context, string input)
        {
            var result = new StringBuilder();

            var validCategories = input.ToLower().Split(' ').ToList();

            var books = context.Books.
                Select(b => new
                {
                    b.Title,
                    Categories = b.BookCategories
                        .Select(c => c.Category.Name.ToLower())
                        .ToList()
                })
                .OrderBy(b => b.Title)
                .ToList()
                .Where(b => validCategories.Intersect(b.Categories).ToArray().Length > 0);;
            foreach (var b in books)
            {
                result.AppendLine($"{b.Title}");
            }

            return result.ToString().TrimEnd();
        }
        //7. Released Before Date
        public static string GetBooksReleasedBefore(BookShopContext context, string date)
        {
            var result = new StringBuilder();

            var formatedDate = DateTime.ParseExact(date, "dd-MM-yyyy", CultureInfo.InvariantCulture);

            var books = context.Books
                .Select(b => new
                {
                    b.Title,
                    b.EditionType,
                    b.Price,
                    b.ReleaseDate
                })
                .ToList()
                .Where(b => b.ReleaseDate < formatedDate)
                .OrderByDescending(b => b.ReleaseDate);

            foreach (var b in books)
            {
                result.AppendLine($"{b.Title} - {b.EditionType} - ${b.Price:f2}");
            }

            return result.ToString().TrimEnd();
        }
        //8. Author Search
        public static string GetAuthorNamesEndingIn(BookShopContext context, string input)
        {
            var result = new StringBuilder();

            var authors = context.Authors
                .Select(a => new
                {
                    a.FirstName,
                    a.LastName
                })
                .ToList()
                .Where(a => a.FirstName.EndsWith(input))
                .OrderBy(a => a.FirstName)
                .ThenBy(a => a.LastName);

            foreach (var a in authors)
            {
                result.AppendLine($"{a.FirstName} {a.LastName}");
            }

            return result.ToString().TrimEnd();
        }
        //9. Book Search
        public static string GetBookTitlesContaining(BookShopContext context, string input)
        {
            var books = context.Books
                .Select(b => b.Title)
                .ToList()
                .Where(b => b.ToLower().Contains(input.ToLower()))
                .OrderBy(b => b);
            var result = new StringBuilder();

            foreach (var b in books)
            {
                result.AppendLine($"{b}");
            }

            return result.ToString().TrimEnd();
        }
        //10. Book Search by Author
        public static string GetBooksByAuthor(BookShopContext context, string input)
        {
            var result = new StringBuilder();

            var booksWithAuthors = context.Books
                .Select(b => new
                {
                    b.BookId,
                    b.Title,
                    AuthorFirstName = b.Author.FirstName,
                    AuthorLastName = b.Author.LastName
                })
                .ToList()
                .Where(a => a.AuthorLastName.ToLower().StartsWith(input.ToLower()))
                .OrderBy(b => b.BookId);

            foreach (var book in booksWithAuthors)
            {
                result.AppendLine($"{book.Title} ({book.AuthorFirstName} {book.AuthorLastName})");
            }

            return result.ToString().TrimEnd();
        }
        //11. Count Books
        public static int CountBooks(BookShopContext context, int lengthCheck)
        {
            var books = context.Books
                .Select(b => b.Title)
                .ToList()
                .Where(b => b.Length > lengthCheck);
            return books.Count();
        }
        //12. Total Book Copies
        public static string CountCopiesByAuthor(BookShopContext context)
        {
            var result = new StringBuilder();

            var authorsAndCopies = context.Authors
                .Select(a => new
                {
                    a.FirstName,
                    a.LastName,
                    Copies = a.Books.ToList().Sum(b => b.Copies)
                })
                .OrderByDescending(a => a.Copies);

            foreach (var a in authorsAndCopies)
            {
                result.AppendLine($"{a.FirstName} {a.LastName} - {a.Copies}");
            }

            return result.ToString().TrimEnd();
        }
        //13. Profit by Category
        public static string GetTotalProfitByCategory(BookShopContext context)
        {
            var result = new StringBuilder();

            var categotiesAndProfit = context.Categories
                .Select(b => new
                {
                    b.Name,
                    Profit = b.CategoryBooks.Sum(cb => cb.Book.Price * cb.Book.Copies)
                })
                .OrderByDescending(c => c.Profit)
                .ThenBy(c => c.Name);

            foreach (var c in categotiesAndProfit)
            {
                result.AppendLine($"{c.Name} ${c.Profit:f2}");
            }

            return result.ToString().TrimEnd();
        }
        //14. Most Recent Books
        public static string GetMostRecentBooks(BookShopContext context)
        {
            var result = new StringBuilder();

            var categoryWithRecentBooks = context.Categories
                .Select(c => new
                {
                    c.Name,
                    Books = c.CategoryBooks.Select(cb => new
                    {
                        BookTitle = cb.Book.Title,
                        BookReleaseDate = cb.Book.ReleaseDate
                    })
                    .OrderByDescending(b => b.BookReleaseDate)
                    .Take(3)
                })
                .ToList()
                .OrderBy(c => c.Name);

            foreach (var c in categoryWithRecentBooks)
            {
                result.AppendLine($"--{c.Name}");
                foreach (var b in c.Books)
                {
                    result.AppendLine($"{b.BookTitle} ({b.BookReleaseDate.Value.Year})");
                }
            }

            return result.ToString().TrimEnd();
        }
        //15. Increase Prices
        public static void IncreasePrices(BookShopContext context)
        {
            var books = context.Books
                .Where(b => b.ReleaseDate.Value.Year < 2010);

            foreach (var b in books)
            {
                b.Price += 5;
            }
            context.SaveChanges();
        }
        //16. Remove Books
        public static int RemoveBooks(BookShopContext context)
        {
            var books = context.Books
                .Where(b => b.Copies < 4200);

            var booksCount = books.Count();
            context.Books.RemoveRange(books);
            context.SaveChanges();

            return booksCount;
        }
    }
}
