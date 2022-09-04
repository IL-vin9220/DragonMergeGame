function CalEggs()
{
    var CurrentMoney = parseInt(document.getElementById("CurrentMoney").value);
    // var LevelDragon = parseInt(document.getElementsByName("LevelDragon").value);
    var OrderEggs = parseInt(document.getElementById("OrderEggs").value);
    var CostForEgg = parseInt(document.getElementById("CostForEgg").value);
    CostForEgg = OrderEggs*(CostForEgg+5);
    var mess = "";
    if(document.getElementById("CurrentMoney").value == ""&& CostForEgg > CurrentMoney)
            mess = "Không xác định";
    else if(document.getElementById("CurrentMoney").value != "" && CostForEgg > CurrentMoney)
    {
        mess = "Không thể mua đủ " + SplitThousand(OrderEggs) + " quả trứng" + "<br>" + "Chỉ mua được: " + SplitThousand(parseInt(CurrentMoney/(parseInt(document.getElementById("CostForEgg").value)+5)));

    }
    else
        mess = "Mua đủ " + OrderEggs + " quả";
    var result = "Lượng tiền hiện tại: "+ SplitThousand(CurrentMoney) +"<br>"+"Số trứng cần mua: "+ SplitThousand(OrderEggs) +"<br>"+ "Số tiền cần: "+ SplitThousand(CostForEgg) + "<br>" +mess;
    document.getElementById("result").innerHTML = result;
}

function CalLevelDragon()
{
    var sl = 2;
    var LevelDragon = parseInt(document.getElementById("LevelDragon").value);
    for(var i=0; i<LevelDragon; i++)
    {
        if(sl%2 == 0)
            sl = parseInt(sl/2)*5;
        else
            sl = parseInt(sl/2)*5 + 3;
    }
    var result = "Level rồng: " + LevelDragon + "<br>" + "Số lượng: 2<br>" + "Số lượng trứng rồng: "+ SplitThousand(sl) +" quả";
    document.getElementById("result").innerHTML = result;
}

function Calculator()
{
    const cal = document.getElementById("Cal").value;
    var running = true;
    while(running)
    {
        if(cal.split("+").length > 1)
        {
            var subCal = cal.split("+");
            var result = 0;
            for(var i=0; i<subCal.length; i++)
                result += parseFloat(subCal[i]);
            document.getElementById("Cal").value = result;
            running = false;
        }
        else if(cal.split("-").length > 1)
        {
            var subCal = cal.split("-");
            var result = subCal[0];
            for(var i=1; i<subCal.length; i++)
                result -= parseFloat(subCal[i]);
            document.getElementById("Cal").value = result;
            running = false;
        }
        else if(cal.split("*").length > 1)
        {
            var subCal = cal.split("*");
            var result = 1;
            for(var i=0; i<subCal.length; i++)
                result *= parseFloat(subCal[i]);
            document.getElementById("Cal").value = result;
            running = false;
        }
        else if(cal.split("x").length > 1)
        {
            var subCal = cal.split("x");
            var result = 1;
            for(var i=0; i<subCal.length; i++)
                result *= parseFloat(subCal[i]);
            document.getElementById("Cal").value = result;
            running = false;
        }
        else if(cal.split("/").length > 1)
        {
            var subCal = cal.split("/");
            var result = subCal[0];
            for(var i=1; i<subCal.length; i++)
                result /= parseFloat(subCal[i]);
            document.getElementById("Cal").value = result;
            running = false;
        }
        else
        {
            alert("Phép tính không đúng, vợ dùng lại dấu đi, hehe!!!");
            running = false;
        }

    }
}

function LevelUp()
{
    var level = parseInt(document.getElementById("LevelMax").value);
    if(level > 20)
        level = 20;
    else
        level += 1;
    document.getElementById("LevelMax").value = level;
}

function LevelDown()
{
    var level = parseInt(document.getElementById("LevelMax").value);
    if(level < 0)
        level = 0;
    else
        level -= 1;
    document.getElementById("LevelMax").value = level;
}

function Reset()
{
    document.getElementById("LevelMax").value = "";
    document.getElementById("Count").value = "";
}

function CalLevelAll()
{
    var sl = parseInt(document.getElementById("Count").value);
    var Level = parseInt(document.getElementById("LevelMax").value);
    for(var i=0; i<Level; i++)
    {
        if(sl%2 == 0)
            sl = parseInt(sl/2)*5;
        else
            sl = parseInt(sl/2)*5 + 3;
    }
    var result = "Level hiện tại: 1<br>"+"Level max: " + Level + "<br>" + "Số lượng cần: " + SplitThousand(sl);
    document.getElementById("ResultLevel").innerHTML = result;
    // alert("Hello world");
}

function SplitThousand(num)
{
    var variable = num.toString();
    var result = "";
    if(variable.length < 3)
        result = variable;
    while (variable.length > 3)
    {
        var i = variable.length - 3;
        result = "." + variable.substring(i, i+3) + result;
        variable = variable.substring(0, i);
        
        if (variable.length <= 3)
        {
            result = variable + result;
        }
    }
    
    return result;
}