$(document).ready(function() {
    $("button").click(function() {
        var buttonval= $(this).val();
        console.log(buttonval);
        console.log(typeof buttonval);
        var a=parseInt(buttonval);
        var b=parseInt(document.getElementById('textarea').value);
        console.log(typeof a);
        console.log(b);
        switch(buttonval)
        {
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "+":
            case "-":
            case "*":
            case "/":
                document.getElementById('textarea').value+=buttonval;
                break;
            case "0":
                if(document.getElementById('textarea').value != '')
                {   
                    document.getElementById('textarea').value+=buttonval;
                }
                break;

            case "clear":
                document.getElementById('textarea').value = '';  
                break;
            

            case "equal":
                              
                // var str=document.getElementById('textarea').value;
                // var num1= parseInt(str1);
                // var n=str.indexOf(buttonval);
                // var str2=str1.substring(n+1,str1.length-1)
                // var num2=parseInt(str2);
                // console.log(num1);
                // console.log(typeof num1);
                // console.log(num2);
                // console.log(typeof num2);
                // console.log(num1+num2);

                var str=document.getElementById('textarea').value;
                var str_splitted=[];
                var operator=[];
                var j=0;
                var k=0;
                for(var i=0;i<str.length;i++)
                {
                    if((i==0 || i== str.length-1) && (str[i] === '*' || str[i] === '/'))
                    {
                        document.getElementById('textarea').value='Syntax error';
                    }
                    else if(i!= str.length-1 && ( str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/') && ( str[i+1] === '+' || str[i+1] === '-' || str[i+1] === '*' || str[i+1] === '/'))
                    {
                        document.getElementById('textarea').value='Syntax error';
                    }
                    if(i !=0 && ( str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/'))
                    {
                        str_splitted[j]=str.substring(k,i-1);
                        operator[j]=str[i];
                        j++;
                        k=i+1; 
                    }
                }
                console.log(str_splitted);
                console.log(operator);
        }
    });
});