using Chainblock.Contracts;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Text;

namespace Chainblock.Tests
{
    [TestFixture()]
    public class ChainblockTests
    {
        [Test]
        public void AddMethodShouldWorkProperly()
        {
            IChainblock cb = new Chainblock();
            ITransaction tr = new Transaction();
            cb.Add(tr);
            var exist = cb.Contains(tr);
            Assert.True(exist);
        }
        [Test]
        public void ContainsMethodShouldWorkWithTransaction()
        {
            IChainblock cb = new Chainblock();
            ITransaction tr = new Transaction();
            cb.Add(tr);
            var exist = cb.Contains(tr);
            Assert.True(exist);
        }
        [Test]
        public void ContainsMethodShouldWorkWithGivenId()
        {
            IChainblock cb = new Chainblock();
            ITransaction tr = new Transaction();
            tr.Id = 1;
            cb.Add(tr);
            var exist = cb.Contains(1);
            Assert.True(exist);
        }
        
    }
}
