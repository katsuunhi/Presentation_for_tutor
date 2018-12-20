import re

fileName = 'drugs.txt'
isFind = False
num = 0
isNewPara = False
isRead = True
end = '-----------------------------------------------------------------------'

f = open(fileName)
lineString = ''#f.readline()
DataPattern = re.compile(r"C[0-9]+")