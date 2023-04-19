class BankAccount:
  def __init__(self, account_number, balance=0):
    self.account_number = account_number
    self.balance = balance

  def deposit(self, amount):
    self.balance += amount
    print(f"${amount} deposited into account {self.account_number}")

  def withdraw(self, amount):
    if amount > self.balance:
      print("Insufficient balance.")
    else:
      self.balance -= amount
      print(f"${amount} withdrawn from account {self.account_number}")

  def viewBalance(self):
    print(
      f"Account {self.account_number} has a balance of ${self.balance}")


class Bank:
  def __init__(self):
    self.accounts = []

  def createAccount(self, account_number, initial_balance=0):
    for account in self.accounts:
      if account.account_number == account_number:
        print("Error: Account number already exists")
        return
    account = BankAccount(account_number, initial_balance)
    self.accounts.append(account)
    print(f"Account {account_number} created")

  def getAccount(self, account_number):
    for account in self.accounts:
      if account.account_number == account_number:
        return account
    print("Error: Account not found")

bank = Bank()

bank.createAccount(12345, 1000)
bank.createAccount(67890, 5500)

account = bank.getAccount(12345)
account.deposit(500)

account.withdraw(200)

account.withdraw(2000)
bank.createAccount(12345, 2000)

accountTest = bank.getAccount(99999)
print(accountTest)

account2 = bank.getAccount(67890)
account2.withdraw(1000)

for acc in bank.accounts:
  print(f"Account {acc.account_number} has a balance of ${acc.balance}")

