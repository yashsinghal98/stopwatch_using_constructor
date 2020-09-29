function Clock()
{
  this.start=false;
  this.stop=true;
  let milli=0;
  let sec=0;
  let min=0;
  let loop;
  this.startclock=function(){
    if(this.start===true)return;
    else 
    {
      milli=0;
      min=0;
      sec=0;
      loop=setInterval(()=>{
        milli++;
        if(milli===100)
        {
          sec++;
          milli=0;
        }
        if(sec===60)
        {
          min++;
          sec=0;
        }
        console.log(min+" "+sec+" "+milli+" ");
      },10)
      this.stop=false;
      this.start=true;
    }
  };
  this.stopclock=function(){
    if(this.stop===true)return;
    else 
    {
      this.stop=true;
      this.start=false;
      clearInterval(loop);
    }
  };
  let duration=function()
  {
    console.log("duration"+min+" "+sec+" "+milli);
  };
  Object.defineProperty(this,"dur",{
    get: function(){
        duration();  
    }
  });
};
let a=new Clock();
function clickedstart()
{
   a.startclock();
}
function clickedstop()
{
  a.stopclock();
}
function getdur()
{
  console.log(a.dur);
}