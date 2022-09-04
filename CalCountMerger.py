from cProfile import label
from tkinter import Tk
from tkinter import *

root = Tk()
root.geometry("500x250")

def Next():
    LevelCurrent = 1
    LevelMax = int(textLV.get())
    sl = int(textSL.get())
        
    for i in range(0, int(LevelMax)-1):
        if sl%2 == 0:
            sl = int(sl/2)*5
        else:
            sl = int(sl/2)*5 + 3

    KQ1 = """Level hiện tại: {0}\n\nLevel Max: {1}\n\nSố lượng cần: {2}""".format(LevelCurrent, LevelMax, sl)
    KQ.config(text = KQ1)

def LVU():
    lv = int(textLV.get())+1
    textLV.delete(0,END)
    textLV.insert(0, str(lv))

def LVD():
    lv = int(textLV.get())-1
    textLV.delete(0,END)
    textLV.insert(0, str(lv))

def Calculator():
    TextCal = textCal.get()
    def Tinh(TextCal):
        if "-" in TextCal:
            subString = TextCal.split('-')
            result = 0
            for item in subString:
                result = int(item) - result
            result = -result
            return result
        elif "+" in TextCal:
            subString = TextCal.split('+')
            result = 0
            for item in subString:
                result += int(item)
            return result
        elif "*" in TextCal:
            subString = TextCal.split('*')
            result = 1
            for item in subString:
                result = int(item) * result
            return result
        elif "x" in TextCal:
            subString = TextCal.split('x')
            result = 1
            for item in subString:
                result = int(item) * result
            return result
        elif "/" in TextCal:
            subString = TextCal.split("/")
            if int(subString[1]) != 0:
                return int(subString[0])/int(subString[1])
            else:
                return "<<error>>"
        else:
            pass

    textCal.delete(0,END)
    textCal.insert(0, Tinh(TextCal))

def Reset():
    textSL.delete(0,END)
    textLV.delete(0,END)
    textSL.insert(0,"2")
    textLV.insert(0,"2")
    textCal.delete(0,END)

lbl1 = Label(root, text="Số lượng: ")
lbl1.place(x = 10, y = 5)
lbl2 = Label(root, text="Level Max: ")
lbl2.place(x = 10, y = 35)
lbl3 = Label(root, text="Calculator: ")
lbl3.place(x = 10, y = 65)

textSL = Entry(root)
textSL.insert(0,"2")
textSL.place(x = 100, y = 5)
textLV = Entry(root)
textLV.insert(0, "2")
textLV.place(x = 100, y = 35)
textCal = Entry(root)
textCal.place(x = 100, y = 65)

next = Button(root, text="Kết quả", command=Next)
lvUp = Button(root, text="LevelUp", command=LVU)
lvDown = Button(root, text="LevelDown", command=LVD)
Cal = Button(root, text="Tính", command=Calculator)
reset = Button(root, text="Reset", command=Reset)

next.place(x = 350, y = 5)
lvUp.place(x = 350, y = 35)
lvDown.place(x = 350, y = 65)
Cal.place(x = 350, y = 95)
reset.place(x = 350, y = 125)

KQ = Label(root)
KQ.place(x = 30, y = 100)


root.mainloop()