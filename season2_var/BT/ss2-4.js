x=prompt("Nhap so tien X:");
var t_100 =0;
var t_50=0;
var t_20=0;
var t_10=0;
var t=x/1000;
var i;
for(i=1000;i<0;i--)
{
    if(t>=100)
    {
        t-=100;
        t_100++;
    }
    else if ((t<100)&&(t<=50))
    {
        t-=50;
        t_50++;
    }
    else if((x < 50) && (x >= 20))
    {
        t-=20;
        t_20++;
    }
    else (x==10)
    {
        t-=10;
        t_10++;
    }
}
document.write(t_100);
document.write("so to tien 50k:"+t_50);
document.write("so to tien 20k:"+t_20);
document.write("so to tien 100k:"+t_10);


