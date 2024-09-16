// Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
      ];
  
      const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
      ];
      
      // Array.prototype.filter()
      // 1. Filter the list of inventors for those who were born in the 1500's

      //let oldInventors = inventors.filter((inventor) => {
      //  if (inventor.year > 1499 && inventor.year < 1600)
      //      return true;
      //  return false;
      //});
      // console.log(oldInventors);

      // Array.prototype.map()
      // 2. Give us an array of the inventors first and last names

      //let titleNames = inventors.map((inventor) => {
      //  let titleName = inventor.first + " " + inventor.last
      //  return titleName;
      //});
      //console.log(titleNames);

      // Array.prototype.sort()
      // 3. Sort the inventors by birthdate, oldest to youngest

      //let birthdates = inventors.sort((a, b) => {
      //  if (a.year > b.year) {
      //      return -1;
      //  } else {
      //      return 1;
      //  }
      //});
      //let birthdates = inventors.sort((a, b) => a.year > b.year ? -1 : 1);
      //for (let i = 0; i < birthdates.length; i++) {
      //  console.log(`Born ${birthdates[i].year} - ${birthdates[i].first} ${birthdates[i].last}`);
      //}

      // Array.prototype.reduce()
      // 4. How many years did all the inventors live all together?

      //let sum = inventors.reduce((a, b) => {
      //  return a + (b.passed - b.year);
      //}, 0);
      //console.log(sum);

      // 5. Sort the inventors by years lived

        //let ordered = inventors.sort((a, b) =>  
        //  (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
        //for (let i = 0; i < ordered.length; i++) {
        //  ordered[i].lived = ordered[i].passed - ordered[i].year;
        //}
        //console.table(inventors);
  
      // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
      // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
  
        ////Use inspector to find container to search for what is holding the links
        //let category = document.querySelector('mw-category');
        ////Get all links in the container
        //let links = category.querySelectorAll('a');
        ////Convert links to a proper array instead of a DOM list
        //links = Array.from(links);
        ////Now I have an array of all the 'a' links. 
        ////Change each entry to just the text content 
        //de = links.map(links => links.textContent);
        ////Filter list to only include entries containing 'de'
        //de = de.filter(name => name.includes('de'));

      // 7. sort Exercise
      // Sort the people alphabetically by last name

        //let lastSort = people.sort((a, b) => a < b ? -1 : 1);
        //console.log(lastSort);
  
      // 8. Reduce Exercise
      // Sum up the instances of each of these
      const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
      //Updated, flexible attempt
        //const transport = data.reduce((a, b) => {
        //  if (!a[b]) {
        //      a[b] = 0;
        //  }
        //  a[b]++;
        //  return a;
        //}, {});
        //console.log(transport);
      
      //First Attempt:  
        //const transport = {}
        //let car = data.reduce((a, b) => {
        //  if (b === 'car') {
        //      ++a
        //  }
        //  return a;
        //}, 0);
        //transport.car = car;
  //
        //let truck = data.reduce((a, b) => {
        //  if (b === 'truck') {
        //      ++a
        //  }
        //  return a;
        //}, 0);
        //transport.truck = truck;
  //
        //let walk = data.reduce((a, b) => {
        //  if (b === 'walk') {
        //      ++a
        //  }
        //  return a;
        //}, 0);
        //transport.walk = walk;
  //
        //let bike = data.reduce((a, b) => {
        //  if (b === 'bike') {
        //      ++a
        //  }
        //  return a;
        //}, 0);
        //transport.bike = bike;
  //
        //let van = data.reduce((a, b) => {
        //  if (b === 'van') {
        //      ++a
        //  }
        //  return a;
        //}, 0);
        //transport.van = van;
  //
        //console.log(transport);