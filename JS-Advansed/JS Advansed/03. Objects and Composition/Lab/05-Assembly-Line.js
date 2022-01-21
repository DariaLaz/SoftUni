function createAssemblyLine(car){
    let decoratorFucs = {
        hasClima(param = {}) {
            param.temp = 21;
            param.tempSettings = 21;
            param.adjustTemp = function(){
                if(this.temp < this.tempSettings){
                    param.temp++;
                } else if (this.temp > this.tempSettings){
                    param.temp--;
                }
            }
        },
        hasAudio: function(param = {}){
            param.currentTrack = {
                name: null,
                artist: null,
            }
            param.nowPlaying = function(){
                if(param.currentTrack){
                console.log(`Now playing '${param.currentTrack.name}' by ${param.currentTrack.artist}` )
                }
            }
        },
        hasParktronic: function(param = {}){
            param.checkDistance = function(num){
                if(num < 0.1){
                    console.log(`Beep! Beep! Beep!`)
                } else if (num < 0.25){                    
                    console.log(`Beep! Beep!`)
                } else if (num < 0.5){
                    console.log(`Beep!`)
                } else{
                    console.log('')
                }
            }
        }
    };

    return decoratorFucs;
}
//set up
const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};
// //1
// assemblyLine.hasClima(myCar);
// console.log(myCar.temp);
// myCar.tempSettings = 18;
// myCar.adjustTemp();
// console.log(myCar.temp);
// //2
// assemblyLine.hasAudio(myCar);
// myCar.currentTrack = {
//     name: 'Never Gonna Give You Up',
//     artist: 'Rick Astley'
// };
// myCar.nowPlaying();
//3
assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);
//4
console.log(myCar);