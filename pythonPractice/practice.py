
# numberToSave = ''
# while (type(numberToSave) != int) :
#   numberToSave = (input("Input an integer: "))
#   if ()

# int(numberToSave)
# print(type(numberToSave))

# string = input("Input your string to detect: ")
# if "  " in string:
#     print("Double spaces detected!")
# else:
#     print("No double spaces found")

# Create a tuple containing the fruit names
#fruits = (input("Enter fruit 1: "), input("Enter fruit 2: "), input("Enter fruit 3: "), input("Enter fruit 4: "), input("Enter fruit 5: "), input("Enter fruit 6: "), input("Enter fruit 7: "))

# Print the tuple of fruits
#print("The tuple of fruits is:", fruits)


# Using lists
# list1 = [1, 2, 3, 4, 5]
# list2 = [10, 20, 30, 40, 50]

# sum_list = list1 + list2
# print(sum_list)

# sum_list = []
# if len(list1) == len(list2):
#     for i in range(len(list1)):
#         sum_list.append(list1[i] + list2[i])
#     print("The sum of the two lists is:", sum_list)
# else:
#     print("The two lists must have the same length in order to run the operation successfully.")

marks = {"Alice": 85, "Bob": 90, "Charlie": 75, "David": 80, "Emma": 95}
name = input("Enter the name of the student: ")
if name in marks:
  print(name, "score", marks[name])
else:
  print("Not a student")

print("Please enter 10 numbers")
numbers = set()

for i in range(10):
    number = int(input("Enter number " + str(i+1) + ": "))
    numbers = numbers.union({number})
print("Unique numbers:", numbers)

s={}
print(type(s))