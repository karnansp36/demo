from test import good
from packages import lib

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def display(self):
        print(self.name, self.age)


a = Person("karnan", 23)
b= Person("john", 12)


good()
lib.pack()


b.display()
print(a.name, a.age)