# JavaScript 
---

## 1. What is the difference between null and undefined?

`undefined` আসে যখন কোন ডেটা পাইনি বা কোন ভ্যারিয়েবল ডিফাইন করি নাই। জাভাস্ক্রিপ্ট নিজেরে এটা দেখায়।  
`null` আমরা ডেভেলপার হিসেবে সেট করি, এটা বোঝাতে "এখানে কোন ডেটা নাই"।  

>  `undefined` মানে JS বলছে "আমি জানি না এখানে কি আছে", আর `null` মানে আমরা বলছি "কিছুই নাই এখানে"।

---

## 2. What is the use of the map() function in JavaScript? How is it different from forEach()?

`map()` ব্যবহার করি যখন ডেটা নিতে চাই আর **নতুন array বানাতে চাই**। এটি ডেটা return করে।  
`forEach()` শুধু প্রতি আইটেমে কিছু অপারেশন করে, **কিছু return করে না**।  

> সহজে বললে, নতুন array চাইলে `map` ব্যবহার করি, শুধু কিছু এক্সিকিউট করতে চাইলে `forEach` ব্যবহার করি।

---

## 3. What is the difference between == and ===?

`==` শুধু **ভ্যালু চেক করে**, টাইপ ইগনোর করে।  
`===` চেক করে **ভ্যালু আর টাইপ দুটোই**।  

> যেমন - `5 == '5'` হলো true, কিন্তু `5 === '5'` false।

---

## 4. What is the significance of async/await in fetching API data?

`async/await` লাগে যখন আমরা ডেটা ফেচ করতে চাই আর **ডেটা আসা পর্যন্ত অপেক্ষা করতে চাই**।  
`await` কোডকে থামিয়ে রাখে যতক্ষণ না Promise resolve হয়।  

> এটা Asynchronous কোডকে synchronous মতো পড়তে সাহায্য করে।

---

## Explain the concept of Scope in JavaScript (Global, Function, Block).

**Scope** = কোন ভ্যারিয়েবল বা ফাংশন কোথায় ব্যবহার করা যাবে।  
- **Global scope**: পুরো ফাইলে যেকোন জায়গা থেকে অ্যাক্সেস করা যায়।  
- **Function scope**: শুধু ফাংশনের ভিতরে ব্যবহার করা যায়।  
- **Block scope**: শুধু `{}` এর ভিতরে ব্যবহার করা যায় (যেমন লুপ বা if), সাধারণত `let` বা `const` দিয়ে।  

> সহজভাবে, scope বলতে বোঝায় **কে কোন ভ্যারিয়েবল দেখতে বা ব্যবহার করতে পারবে**।

---
 
