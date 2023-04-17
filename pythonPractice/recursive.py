def fibonacci(n, startNumber):
  if n == startNumber:
    return [startNumber, startNumber]
  else:
    fibList = fibonacci(n-1, startNumber)
    fibList.append(fibList[-1] + fibList[-2])
    return fibList

fibStart = int(input("Enter the start number: "))
fibNumber = int(input("Enter the length of the list: ")) + fibStart - 2

fibList = fibonacci(fibNumber, fibStart)
print(len(fibList))
print(fibList)
