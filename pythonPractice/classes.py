import math 
class Calculator:
  def __init__(self, number):
    self.number = number
  def square(self):
    squareVal = int(self.number)**2
    print("The square of ", self.number, " is ", squareVal)
  def cube(self):
    squareVal = int(self.number)**3
    print("The cube of ", self.number, " is ", squareVal)
  def root(self):
    squareVal = math.sqrt(int(self.number))
    print("The root of ", self.number, " is ", squareVal)

calc = Calculator(input("Choose a number: "))
calc.cube()
calc.square()
calc.root()