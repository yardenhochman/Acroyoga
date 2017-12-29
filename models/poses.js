const poses = [
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Assym.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/double-throne.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      "Michael O'Reilly, Nicole Monteiro, Stephanie Garcia"
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/07/DSC_3541.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/03/Calatrava.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      'Ayo Oppenheimer, Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/scorpion-side.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Lotem Hiki'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/Lotus-Pile.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      'Ayo Oppenheimer Abitbol, Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/2016-09-20-11.38.58-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Melanie Ladybase Love, Stephanie Urness'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Low-Reverse-Foot-to-Hand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Leshem Choshen, Shiri Weitz, Yael Hovav'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Foot-to-Foot-Headstand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Really Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Darya Kalinikina, Tolik Zemskih'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/07/maple-lesh-amir.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Amir LLuz, Leshem Choshen'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/goofy-chair-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Easy',
    'Number of Persons': '2 Person',
    Tagged: 'Anael Engel, Leshem Choshen'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/01/Goofy-Goofy-Foot-to-Foot.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Gregory Shapovalov, Kuzma Salosin'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/01/3.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Anton Yartsave, Maria Lebesheva, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/2016-04-13_11-59-47.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Anton Yartsave, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/10/Thinker.jpg',
    'Skills with Thinker':
      'Koala’s Revenge, Ninja Queen, F2H Spinner, Game of Thrones, Musical Chairs 2 & 3, Roller Derby, Razor’s Edge, Lazy Throne',
    'Position Type': 'L-Base',
    Difficulty: 'Easy',
    'Number of Persons': '2 Person',
    Tagged: 'Diana Lam, Greg Clarka'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Foot-to-foot-Lord-of-the-dance-pose-.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Ladybase, Sunita Prowse'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/Foot-Sirasana.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Gregory Shapovalov, Kuzma Salosin'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/double-throne.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      "Michael O'Reilly, Nicole Monteiro, Stephanie Garcia"
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/2016-09-20-11.38.58-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Melanie Ladybase Love, Stephanie Urness'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/08/Bicep-Stand-Supine.jpg',
    'Skills with Bicep Stand':
      'The Bread Roll, BiCeprise, Bicepticon, Crocodile rock, Mono-Limb Goofy Training, Bicep Stand to Roll Down, Squatty Potty, The Grünter, Trex and Roll, Bicep See Saw',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Aniane Smith, Danny Smith'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/10/Thinker.jpg',
    'Skills with Thinker':
      'Koala’s Revenge, Ninja Queen, F2H Spinner, Game of Thrones, Musical Chairs 2 & 3, Roller Derby, Razor’s Edge, Lazy Throne',
    'Position Type': 'L-Base',
    Difficulty: 'Easy',
    'Number of Persons': '2 Person',
    Tagged: 'Diana Lam, Greg Clarka'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/iClGiKBN_4.jpeg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Lira Natalie, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/2016-04-13_11-59-47.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Anton Yartsave, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Bluejay.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '4 Person',
    Tagged:
      'Anie Inoa, Leigh Cordetti, Maren Hill'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/IMG_8277.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Tyabin Alexey, Tyabina Elena'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Foot-to-foot-Lord-of-the-dance-pose-.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Ladybase, Sunita Prowse'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/08/Supine-Super-Free-Reverse-Star.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Josh Young, Megan Strawn'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/7fm90e3UCS4.jpeg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Lira Natalie, Maria Prekrasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/DSC_3603-2.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Jana Šálková, Jaroslav Grochal'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/01/3.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Anton Yartsave, Maria Lebesheva, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Boredstand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Acromantix, Rok, Sanja'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/07/DSC_3541.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/IMG_1020_mini.jpg',
    'Skills with Reverse Foot-To-Foot':
      'Overturn, Dislocate, Footcycle, Riptide, Reverse Wheel of Doom, Foot Salutations, Wheel of Doom',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/DSC_3603-2.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Jana Šálková, Jaroslav Grochal'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/03/Calatrava.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      'Ayo Oppenheimer, Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/Lotus-Pile.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      'Ayo Oppenheimer Abitbol, Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Vishnus-Hook-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Ladybase, Sunita Prowse'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/iClGiKBN_4.jpeg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Lira Natalie, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Foot-to-Foot-Headstand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Really Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Darya Kalinikina, Tolik Zemskih'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/IMG_8277.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Tyabin Alexey, Tyabina Elena'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Boredstand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Acromantix, Rok, Sanja'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Vishnus-Hook-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Ladybase, Sunita Prowse'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/7fm90e3UCS4.jpeg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Lira Natalie, Maria Prekrasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/07/DSC_6511.jpg',
    'Skills with Bowsprit':
      'Bow Shock, Blue Mermaid, Sailor',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/Foot-Sirasana.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Gregory Shapovalov, Kuzma Salosin'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Low-Reverse-Foot-to-Hand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Leshem Choshen, Shiri Weitz, Yael Hovav'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/07/DSC_6511.jpg',
    'Skills with Bowsprit':
      'Bow Shock, Blue Mermaid, Sailor',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/01/Goofy-Goofy-Foot-to-Foot.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Gregory Shapovalov, Kuzma Salosin'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Assym.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/scorpion-side.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Lotem Hiki'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/IMG_1020_mini.jpg',
    'Skills with Reverse Foot-To-Foot':
      'Overturn, Dislocate, Footcycle, Riptide, Reverse Wheel of Doom, Foot Salutations, Wheel of Doom',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/08/Supine-Super-Free-Reverse-Star.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Josh Young, Megan Strawn'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/08/Bicep-Stand-Supine.jpg',
    'Skills with Bicep Stand':
      'The Bread Roll, BiCeprise, Bicepticon, Crocodile rock, Mono-Limb Goofy Training, Bicep Stand to Roll Down, Squatty Potty, The Grünter, Trex and Roll, Bicep See Saw',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Aniane Smith, Danny Smith'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/07/maple-lesh-amir.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Amir LLuz, Leshem Choshen'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/IMG_8277.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Tyabin Alexey, Tyabina Elena'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Boredstand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Acromantix, Rok, Sanja'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Bluejay.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '4 Person',
    Tagged:
      'Anie Inoa, Leigh Cordetti, Maren Hill'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Foot-to-foot-Lord-of-the-dance-pose-.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Ladybase, Sunita Prowse'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/goofy-chair-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Easy',
    'Number of Persons': '2 Person',
    Tagged: 'Anael Engel, Leshem Choshen'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/DSC_3603-2.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Jana Šálková, Jaroslav Grochal'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/iClGiKBN_4.jpeg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Lira Natalie, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/07/maple-lesh-amir.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Amir LLuz, Leshem Choshen'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/10/Thinker.jpg',
    'Skills with Thinker':
      'Koala’s Revenge, Ninja Queen, F2H Spinner, Game of Thrones, Musical Chairs 2 & 3, Roller Derby, Razor’s Edge, Lazy Throne',
    'Position Type': 'L-Base',
    Difficulty: 'Easy',
    'Number of Persons': '2 Person',
    Tagged: 'Diana Lam, Greg Clarka'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/01/Goofy-Goofy-Foot-to-Foot.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Gregory Shapovalov, Kuzma Salosin'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/07/DSC_6511.jpg',
    'Skills with Bowsprit':
      'Bow Shock, Blue Mermaid, Sailor',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Low-Reverse-Foot-to-Hand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Leshem Choshen, Shiri Weitz, Yael Hovav'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/IMG_1020_mini.jpg',
    'Skills with Reverse Foot-To-Foot':
      'Overturn, Dislocate, Footcycle, Riptide, Reverse Wheel of Doom, Foot Salutations, Wheel of Doom',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/07/DSC_3541.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Assym.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/scorpion-side.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Leshem Choshen, Lotem Hiki'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/Foot-Sirasana.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Gregory Shapovalov, Kuzma Salosin'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/7fm90e3UCS4.jpeg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Lira Natalie, Maria Prekrasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/08/Bicep-Stand-Supine.jpg',
    'Skills with Bicep Stand':
      'The Bread Roll, BiCeprise, Bicepticon, Crocodile rock, Mono-Limb Goofy Training, Bicep Stand to Roll Down, Squatty Potty, The Grünter, Trex and Roll, Bicep See Saw',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Aniane Smith, Danny Smith'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Foot-to-Foot-Headstand.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Really Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Darya Kalinikina, Tolik Zemskih'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/double-throne.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      "Michael O'Reilly, Nicole Monteiro, Stephanie Garcia"
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/12/2016-04-13_11-59-47.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Anton Yartsave, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/01/3.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Anton Yartsave, Maria Lebesheva, Maria Prekasnaya'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/goofy-chair-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Easy',
    'Number of Persons': '2 Person',
    Tagged: 'Anael Engel, Leshem Choshen'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/04/Lotus-Pile.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      'Ayo Oppenheimer Abitbol, Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2017/03/Calatrava.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '3 Person',
    Tagged:
      'Ayo Oppenheimer, Leshem Choshen, Shiri Weitz'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/2016-09-20-11.38.58-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged:
      'Melanie Ladybase Love, Stephanie Urness'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Bluejay.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '4 Person',
    Tagged:
      'Anie Inoa, Leigh Cordetti, Maren Hill'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/08/Supine-Super-Free-Reverse-Star.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Hard',
    'Number of Persons': '2 Person',
    Tagged: 'Josh Young, Megan Strawn'
  },
  {
    img:
      'https://www.acropedia.org/wp-content/uploads/2016/09/Vishnus-Hook-1.jpg',
    'Position Type': 'L-Base',
    Difficulty: 'Intermediate',
    'Number of Persons': '2 Person',
    Tagged: 'Ladybase, Sunita Prowse'
  }
];

module.exports = poses;