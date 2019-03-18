const  TimeDuration =(data)=>{
    let min = 0;
     let hr = 0;
     let sec = data
        while(sec>=3600){
            hr = Math.trunc(hr+(sec/3600));
            sec = sec%3600;
            console.log(hr);
            console.log(sec)
        }
        while(sec>=60){
            min= Math.trunc(min+(sec/60));
            sec = sec%60
        }
    return hr+"h"+":"+min+"m"+":"+sec+"s"
}
const tmd = TimeDuration(6343)
console.log(tmd)