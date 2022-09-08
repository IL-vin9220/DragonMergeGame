// var widthscreen = screen.width;
// var heightscreen = screen.height;
// function getscreen()
// {
//     alert(widthscreen);
//     alert(heightscreen);
// }

var Items = 0;

function CalItems()
{
    var CurrentMoney = parseInt(document.getElementById("CurrentMoney").value);
    var growup = parseInt(document.getElementById("GrowUpMoney").value);
    // var LevelDragon = parseInt(document.getElementsByName("LevelDragon").value);
    var OrderItems = parseInt(document.getElementById("OrderItems").value);
    var CostForItem = parseInt(document.getElementById("CostForItem").value);
    CostForItem = OrderItems*(CostForItem+growup);
    var mess = "";
    var donvi = "";
    if(document.getElementById("item").value == "DragonEgg")
        donvi = "quả";
    else 
        donvi = "nhà";
    
    if(document.getElementById("CurrentMoney").value == ""&& CostForItem > CurrentMoney)
            mess = "Không xác định";
    else if(document.getElementById("CurrentMoney").value != "" && CostForItem > CurrentMoney)
    {
        mess = "Không thể mua đủ " + SplitThousand(OrderItems) + " " + donvi + "<br>" + "Chỉ mua được: " + SplitThousand(parseInt(CurrentMoney/(parseInt(document.getElementById("CostForItem").value)+growup))) + " " + donvi;
        Items = parseInt(CurrentMoney/(parseInt(document.getElementById("CostForItem").value)+growup));
    }
    else
    {
        mess = "Mua đủ " + OrderItems + " " + donvi;
        Items = OrderItems;
    }
    var result = "Lượng tiền hiện tại: "+ SplitThousand(CurrentMoney) +"<br>"+"Số " + donvi + " cần mua: "+ SplitThousand(OrderItems) + " " + donvi +"<br>"+ "Số tiền cần: "+ SplitThousand(CostForItem) + "<br>" +mess;
    document.getElementById("result").innerHTML = result;
}

// amount items in level 1 to get 2 items in level user need
function CalCountInLevel()
{
    var sl = 2;
    var Level = parseInt(document.getElementById("Level").value);
    var donvi = "";

    if(document.getElementById("item").value == "DragonEgg")
        donvi = "quả";
    else
        donvi = "nhà";

    if(Level == 0)
        sl = 2;
    else if(Level < 0)
        alert("Hehe, đừng trêu bé chứ, hí hí");
    else
    {
        if(donvi == "quả")
        {
            for(var i=0; i<Level; i++)
            {
                if(sl%2 == 0)
                    sl = parseInt(sl/2)*5;
                else
                    sl = parseInt(sl/2)*5 + 3;
            }
        }
        else
        {
            for(var i=0; i<Level-1; i++)
            {
                if(sl%2 == 0)
                    sl = parseInt(sl/2)*5;
                else
                    sl = parseInt(sl/2)*5 + 3;
            }
        }
    }
    var result = "Level: " + Level + "<br>" + "Số lượng: 2<br>" + "Số lượng mua được: "+ SplitThousand(sl) +" " + donvi;
    document.getElementById("result").innerHTML = result;
}

function CalLevelForItem()
{
    var count = Items;
    var level = parseInt(document.getElementById("Level").value);
    if(isNaN(level)==true)
        alert("Hãy nhập level max muốn tính");
    else if(count == 0)
        alert("Vợ chưa tính số lượng");
    else
    {
        var donvi = "";
        if(document.getElementById("item").value == "DragonEgg")
        {
            donvi = "quả";
        }
        else
            donvi = "nhà";

        var result = "";
        
        if(level < 2 && level > 0 && donvi == "nhà")
            count = 2;
        else if(level < 0)
            alert("Hehe, đừng trêu bé chứ, hí hí");
        else if(level > 20)
            alert("Level cao quá ó vợ iu, hihi");
        else
        {
            if(donvi == "quả")
            {
                for(var i=0; i<level; i++)
                {
                    if(count == 1 && i<level || count == 0 && i<level)
                    {
                        count = 0;
                        break;
                    }
                    else
                    {
                        if(count%5 == 0)
                            count = parseInt(count/5)*2;
                        else
                            count = parseInt(count/5)*2 + 1;
                    }
                }
            }
            else
            {
                for(var i=0; i<level-1; i++)
                {
                    if(count == 1 && i<level-1 || count == 0 && i<level-1)
                    {
                        count = 0;
                        break;
                    }
                    else
                    {
                        if(count%5 == 0)
                            count = parseInt(count/5)*2;
                        else
                            count = parseInt(count/5)*2 + 1;
                    }
                }
            }
        }
        if(donvi == "nhà")
        {
            result = "Số lượng ban đầu: " + Items + " " + donvi + "<br>" + "Level: " + level + "<br>" + "Số lượng có ở level " + level + " : " + count + " " + donvi;
            document.getElementById("result").innerHTML = result;
        }
        result = "Số lượng ban đầu: " + Items + " " + donvi + "<br>" + "Level: " + level + "<br>" + "Số lượng có ở level " + level + " : " + count + " con";
        document.getElementById("result").innerHTML = result;
        
    }
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
    if(Level < 2 && Level > 0)
        sl = 2;
    else if(Level < 0)
        alert("Hehe, đừng trêu bé chứ, hí hí");
    else if(Level > 20)
        alert("Level cao quá ó vợ iu, hihi");
    else
    {
        for(var i=0; i<Level-1; i++)
        {
            if(sl%2 == 0)
                sl = parseInt(sl/2)*5;
            else
                sl = parseInt(sl/2)*5 + 3;
        }
    }
    
    var result = "Level hiện tại: 1<br>"+"Level max: " + Level + "<br>" + "Số lượng cần: " + SplitThousand(sl);
    document.getElementById("ResultLevel").innerHTML = result;
    // alert("Hello world");
}

function SplitThousand(num)
{
    var variable = num.toString();
    var result = "";
    if(variable.length <= 3)
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

function MaxCount()
{
    var count = parseInt(document.getElementById("Count").value);
    var level = parseInt(document.getElementById("LevelMax").value);
    if(isNaN(count)==true&&isNaN(level)==true)
        alert("Hãy nhập số lượng muốn có ở level 1 và level max");
    else if(isNaN(count)==true)
        alert("Hãy nhập vào số lượng muốn có ở level 1");
    else if(isNaN(level)==true)
        alert("Hãy nhập level max muốn tính");
    else
    {
        var result = "";
        if(level < 2 && level > 0)
            count = 2;
        else if(level < 0)
            alert("Hehe, đừng trêu bé chứ, hí hí");
        else if(level > 20)
            alert("Level cao quá ó vợ iu, hihi");
        else
        {
            for(var i=0; i<level-1; i++)
            {
                if(count == 1 && i<level-1 || count == 0 && i<level-1)
                {
                    count = 0;
                    break;
                }
                else
                {
                    if(count%5 == 0)
                        count = parseInt(count/5)*2;
                    else
                        count = parseInt(count/5)*2 + 1;
                }
            }
        }
        result = "Số lượng ở level 1: " + parseInt(document.getElementById("Count").value) + "<br>" + "Level max: " + level + "<br>" + "Số lượng có ở level " + level + " : " + count;
        document.getElementById("ResultLevel").innerHTML = result;
    }
}