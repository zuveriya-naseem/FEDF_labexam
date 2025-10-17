function greet() {
  const greetings = [
    "Good Morning",
    "Good Afternoon",
    "Good Evening",
    "Have a great day ahead!",
  ];

  console.log("----- Greetings from the App -----");
  greetings.forEach((msg, index) => {
    console.log(`${index + 1}. ${msg}`);
  });
  console.log("----------------------------------");
}

greet();


