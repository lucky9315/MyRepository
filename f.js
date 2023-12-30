let my;


const start=()=>
{

    clearInterval(my);
        let h=0;
        let m=0;
        let s=0;
    my= setInterval(updation,1000);

    function updation()
    {
        

    ++s;


    if(s==60)
    {
        ++m;
        s=0;
    }
    if(m==60)
    {
        ++h;
        m=0;
    }

    document.getElementById('label').innerText=`${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`;

    }
    
}


function stop()
{
    clearInterval(my);
}

const resume=()=>
{
    let data=document.getElementById('label').innerText;
    let array=data.split(':');

    let s=Number(array[2]);
    let m=Number(array[1]);
    let h=Number(array[0]);

    console.log(s,m,h);

    my= setInterval(updation,1000);

    function updation()
    {
        
        ++s;


    if(s==60)
    {
        ++m;
        s=0;
    }
    if(m==60)
    {
        ++h;
        m=0;
    }

    document.getElementById('label').innerText=`${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`;

    }



}


const Restart=()=>
{

    clearInterval(my);
        let h=0;
        let m=0;
        let s=0;
    my= setInterval(updation,1000);

    function updation()
    {
        

    ++s;


    if(s==60)
    {
        ++m;
        s=0;
    }
    if(m==60)
    {
        ++h;
        m=0;
    }

    document.getElementById('label').innerText=`${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`;

    }
    
}

