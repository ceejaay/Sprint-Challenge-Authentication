Chad Jemmett
<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?
  Sessions are a way to help a user have a better exprience on a site. The user is able to access different parts of the site without logging in each time they want to visit another page or access a resource.

2. What does bcrypt do to help us store passwords in a secure manner.
  Bcrypt does at least two things to store a password in a secure manner. First, it scrambles the original string. It does this by way of an algorithm. This makes it so the password cannot be read by humans. It also makes it more difficult to read by a computer. Second it adds salt to the string. Salt is a random assortment of characters to further obscure the password. So even if the user password is short, the salt makes it harder for a computer to crack the password using a dictionary.

3. What does bcrypt do to slow down attackers?
  Bcrypt adds *time* to password encryption and decyption to slow down attackers. It uses something called Key Derivation Function. Which is the Hash + time. 

4. What are the three parts of the JSON Web Token?
The three parts of the JSON web token are: 
 1. The header. This contains information about the string and it's encryption.
 2. The payload. This contains the information the sender wants to move from point A to point B.
 3. The signature. This contains the key that's used by the reciever to decrypt the payload.
