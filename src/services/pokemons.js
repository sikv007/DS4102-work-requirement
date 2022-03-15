const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    type: ["grass", "poison"],
    stats: { hp: 45, attack: 49, defense: 49, speed: 45, special: 65 },
    description:
      "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokemon.",
  },
  {
    id: 2,
    name: "ivysaur",
    type: ["grass", "poison"],
    stats: { hp: 60, attack: 62, defense: 63, speed: 60, special: 80 },
    description:
      "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
  },
  {
    id: 3,
    name: "venusaur",
    type: ["grass", "poison"],
    stats: { hp: 80, attack: 82, defense: 83, speed: 80, special: 100 },
    description:
      "Because it stores several kinds of toxic gases in its body it is prone to exploding without warning.",
  },
  {
    id: 4,
    name: "charmander",
    type: ["fire"],
    stats: { hp: 39, attack: 52, defense: 43, speed: 65, special: 50 },
    description:
      "Obviously prefers hot places. When it rains steam is said to spout from the tip of its tail.",
  },
  {
    id: 5,
    name: "charmeleon",
    type: ["fire"],
    stats: { hp: 58, attack: 64, defense: 58, speed: 80, special: 65 },
    description:
      "When it swings its burning tail it elevates the temperature to unbearably high levels.",
  },
  {
    id: 6,
    name: "charizard",
    type: ["fire", "flying"],
    stats: { hp: 78, attack: 84, defense: 78, speed: 100, special: 85 },
    description:
      "Spits fire that is hot enough to melt boulders. Known to cause forest fires unintentionally.",
  },
  {
    id: 7,
    name: "squirtle",
    type: ["water"],
    stats: { hp: 44, attack: 48, defense: 65, speed: 43, special: 50 },
    description:
      "After birth its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
  },
  {
    id: 8,
    name: "wartortle",
    type: ["water"],
    stats: { hp: 59, attack: 63, defense: 80, speed: 58, special: 65 },
    description:
      "Often hides in water to stalk unwary prey. For swimming fast it moves its ears to maintain balance.",
  },
  {
    id: 9,
    name: "blastoise",
    type: ["water"],
    stats: { hp: 79, attack: 83, defense: 100, speed: 78, special: 85 },
    description:
      "A brutal Pokemon with pressurized water jets on its shell. They are used for high speed tackles.",
  },
  {
    id: 10,
    name: "caterpie",
    type: ["bug"],
    stats: { hp: 45, attack: 30, defense: 35, speed: 45, special: 20 },
    description:
      "Its short feet are tipped with suction pads that enable it to tirelessly climb slopes and walls.",
  },
  {
    id: 11,
    name: "metapod",
    type: ["bug"],
    stats: { hp: 50, attack: 20, defense: 55, speed: 30, special: 25 },
    description:
      "This Pokemon is vulnerable to attack while its shell is soft exposing its weak and tender body.",
  },
  {
    id: 12,
    name: "butterfree",
    type: ["bug", "flying"],
    stats: { hp: 60, attack: 45, defense: 50, speed: 70, special: 80 },
    description:
      "In battle it flaps its wings at high speed to release highly toxic dust into the air.",
  },
  {
    id: 13,
    name: "weedle",
    type: ["bug", "poison"],
    stats: { hp: 40, attack: 35, defense: 30, speed: 50, special: 20 },
    description:
      "Often found in forests eating leaves. It has a sharp venomous stinger on its head.",
  },
  {
    id: 14,
    name: "kakuna",
    type: ["bug", "poison"],
    stats: { hp: 45, attack: 25, defense: 50, speed: 35, special: 25 },
    description:
      "Almost incapable of moving this Pokemon can only harden its shell to protect itself from predators.",
  },
  {
    id: 15,
    name: "beedrill",
    type: ["bug", "poison"],
    stats: { hp: 65, attack: 80, defense: 40, speed: 75, special: 45 },
    description:
      "Flies at high speed and attacks using its large venomous stingers on its forelegs and tail.",
  },
  {
    id: 16,
    name: "pidgey",
    type: ["normal", "flying"],
    stats: { hp: 40, attack: 45, defense: 40, speed: 56, special: 35 },
    description:
      "A common sight in forests and woods. It flaps its wings at ground level to kick up blinding sand.",
  },
  {
    id: 17,
    name: "pidgeotto",
    type: ["normal", "flying"],
    stats: { hp: 63, attack: 60, defense: 55, speed: 71, special: 50 },
    description:
      "Very protective of its sprawling territorial area this Pokemon will fiercely peck at any intruder.",
  },
  {
    id: 18,
    name: "pidgeot",
    type: ["normal", "flying"],
    stats: { hp: 83, attack: 80, defense: 75, speed: 91, special: 70 },
    description:
      "When hunting it skims the surface of water at high speed to pick off unwary prey such as MAGIKARP.",
  },
  {
    id: 19,
    name: "rattata",
    type: ["normal"],
    stats: { hp: 30, attack: 56, defense: 35, speed: 72, special: 25 },
    description:
      "Bites anything when it attacks. Small and very quick it is a common sight in many places.",
  },
  {
    id: 20,
    name: "raticate",
    type: ["normal"],
    stats: { hp: 55, attack: 81, defense: 60, speed: 97, special: 50 },
    description:
      "It uses its whiskers to maintain its balance. It apparently slows down if they are cut off.",
  },
  {
    id: 21,
    name: "spearow",
    type: ["normal", "flying"],
    stats: { hp: 40, attack: 60, defense: 30, speed: 70, special: 31 },
    description:
      "Eats bugs in grassy areas. It has to flap its short wings at high speed to stay airborne.",
  },
  {
    id: 22,
    name: "fearow",
    type: ["normal", "flying"],
    stats: { hp: 65, attack: 90, defense: 65, speed: 100, special: 61 },
    description:
      "With its huge and magnificent wings it can keep aloft without ever having to land for rest.",
  },
  {
    id: 23,
    name: "ekans",
    type: ["poison"],
    stats: { hp: 35, attack: 60, defense: 44, speed: 55, special: 40 },
    description:
      "Moves silently and stealthily. Eats the eggs of birds such as PIDGEY and SPEAROW whole.",
  },
  {
    id: 24,
    name: "arbok",
    type: ["poison"],
    stats: { hp: 60, attack: 85, defense: 69, speed: 80, special: 65 },
    description:
      "It is rumored that the ferocious warning markings on its belly differ from area to area.",
  },
  {
    id: 25,
    name: "pikachu",
    type: ["electric"],
    stats: { hp: 35, attack: 55, defense: 30, speed: 90, special: 50 },
    description:
      "When several of these Pokemon gather their electricity could build and cause lightning storms.",
  },
  {
    id: 26,
    name: "raichu",
    type: ["electric"],
    stats: { hp: 60, attack: 90, defense: 55, speed: 100, special: 90 },
    description:
      "Its long tail serves as a ground to protect itself from its own high voltage power.",
  },
  {
    id: 27,
    name: "sandshrew",
    type: ["ground"],
    stats: { hp: 50, attack: 75, defense: 85, speed: 40, special: 30 },
    description:
      "Burrows deep underground in arid locations far from water. It only emerges to hunt for food.",
  },
  {
    id: 28,
    name: "sandslash",
    type: ["ground"],
    stats: { hp: 75, attack: 100, defense: 110, speed: 65, special: 55 },
    description:
      "Curls up into a spiny ball when threatened. It can roll while curled up to attack or escape.",
  },
  {
    id: 29,
    name: "nidoran-f",
    type: ["poison"],
    stats: { hp: 55, attack: 47, defense: 52, speed: 41, special: 40 },
    description:
      "Although small its venomous barbs render this Pokemon dangerous. The female has smaller horns.",
  },
  {
    id: 30,
    name: "nidorina",
    type: ["poison"],
    stats: { hp: 70, attack: 62, defense: 67, speed: 56, special: 55 },
    description:
      "The female's horn develops slowly. Prefers physical attacks such as clawing and biting.",
  },
  {
    id: 31,
    name: "nidoqueen",
    type: ["poison", "ground"],
    stats: { hp: 90, attack: 82, defense: 87, speed: 76, special: 75 },
    description:
      "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
  },
  {
    id: 32,
    name: "nidoran-m",
    type: ["poison"],
    stats: { hp: 46, attack: 57, defense: 40, speed: 50, special: 40 },
    description:
      "Stiffens its ears to sense danger. The larger its horns the more powerful its secreted venom.",
  },
  {
    id: 33,
    name: "nidorino",
    type: ["poison"],
    stats: { hp: 61, attack: 72, defense: 57, speed: 65, special: 55 },
    description:
      "An aggressive Pokemon that is quick to attack. The horn on its head secretes a powerful venom.",
  },
  {
    id: 34,
    name: "nidoking",
    type: ["poison", "ground"],
    stats: { hp: 81, attack: 92, defense: 77, speed: 85, special: 75 },
    description:
      "It uses its powerful tail in battle to smash constrict then break the prey's bones.",
  },
  {
    id: 35,
    name: "clefairy",
    type: ["normal"],
    stats: { hp: 70, attack: 45, defense: 48, speed: 35, special: 60 },
    description:
      "Its magical and cute appeal has many admirers. It is rare and found only in certain areas.",
  },
  {
    id: 36,
    name: "clefable",
    type: ["normal"],
    stats: { hp: 95, attack: 70, defense: 73, speed: 60, special: 85 },
    description:
      "A timid fairy Pokemon that is rarely seen. It will run and hide the moment it senses people.",
  },
  {
    id: 37,
    name: "vulpix",
    type: ["fire"],
    stats: { hp: 38, attack: 41, defense: 40, speed: 65, special: 65 },
    description:
      "At the time of birth it has just one tail. The tail splits from its tip as it grows older.",
  },
  {
    id: 38,
    name: "ninetales",
    type: ["fire"],
    stats: { hp: 73, attack: 76, defense: 75, speed: 100, special: 100 },
    description:
      "Very smart and very vengeful. Grabbing one of its many tails could result in a 1000-year curse.",
  },
  {
    id: 39,
    name: "jigglypuff",
    type: ["normal"],
    stats: { hp: 115, attack: 45, defense: 20, speed: 20, special: 25 },
    description:
      "When its huge eyes light up it sings a mysteriously soothing melody that lulls its enemies to sleep.",
  },
  {
    id: 40,
    name: "wigglytuff",
    type: ["normal"],
    stats: { hp: 140, attack: 70, defense: 45, speed: 45, special: 50 },
    description:
      "The body is soft and rubbery. When angered it will suck in air and inflate itself to an enormous size.",
  },
  {
    id: 41,
    name: "zubat",
    type: ["poison", "flying"],
    stats: { hp: 40, attack: 45, defense: 35, speed: 55, special: 40 },
    description:
      "Forms colonies in perpetually dark places. Uses ultrasonic waves to identify and approach targets.",
  },
  {
    id: 42,
    name: "golbat",
    type: ["poison", "flying"],
    stats: { hp: 75, attack: 80, defense: 70, speed: 90, special: 75 },
    description:
      "Once it strikes it will not stop draining energy from the victim even if it gets too heavy to fly.",
  },
  {
    id: 43,
    name: "oddish",
    type: ["grass", "poison"],
    stats: { hp: 45, attack: 50, defense: 55, speed: 30, special: 75 },
    description:
      "During the day it keeps its face buried in the ground. At night it wanders around sowing its seeds.",
  },
  {
    id: 44,
    name: "gloom",
    type: ["grass", "poison"],
    stats: { hp: 60, attack: 65, defense: 70, speed: 40, special: 85 },
    description:
      "The fluid that oozes from its mouth isn't drool. It is a nectar that is used to attract prey.",
  },
  {
    id: 45,
    name: "vileplume",
    type: ["grass", "poison"],
    stats: { hp: 75, attack: 80, defense: 85, speed: 50, special: 100 },
    description:
      "The larger its petals the more toxic pollen it contains. Its big head is heavy and hard to hold up.",
  },
  {
    id: 46,
    name: "paras",
    type: ["bug", "grass"],
    stats: { hp: 35, attack: 70, defense: 55, speed: 25, special: 55 },
    description:
      "Burrows to suck tree roots. The mushrooms on its back grow by drawing nutrients from the bug host.",
  },
  {
    id: 47,
    name: "parasect",
    type: ["bug", "grass"],
    stats: { hp: 60, attack: 95, defense: 80, speed: 30, special: 80 },
    description:
      "A host-parasite pair in which the parasite mushroom has taken over the host bug. Prefers damp places.",
  },
  {
    id: 48,
    name: "venonat",
    type: ["bug", "poison"],
    stats: { hp: 60, attack: 55, defense: 50, speed: 45, special: 40 },
    description:
      "Lives in the shadows of tall trees where it eats insects. It is attracted by light at night.",
  },
  {
    id: 49,
    name: "venomoth",
    type: ["bug", "poison"],
    stats: { hp: 70, attack: 65, defense: 60, speed: 90, special: 90 },
    description:
      "The dust-like scales covering its wings are color coded to indicate the kinds of poison it has.",
  },
  {
    id: 50,
    name: "diglett",
    type: ["ground"],
    stats: { hp: 10, attack: 55, defense: 25, speed: 95, special: 45 },
    description:
      "Lives about one yard underground where it feeds on plant roots. It sometimes appears above ground.",
  },
  {
    id: 51,
    name: "dugtrio",
    type: ["ground"],
    stats: { hp: 35, attack: 80, defense: 50, speed: 120, special: 70 },
    description:
      "A team of DIGLETT triplets. It triggers huge earthquakes by burrowing 60 miles underground.",
  },
  {
    id: 52,
    name: "meowth",
    type: ["normal"],
    stats: { hp: 40, attack: 45, defense: 35, speed: 90, special: 40 },
    description:
      "Adores circular objects. Wanders the streets on a nightly basis to look for dropped loose change.",
  },
  {
    id: 53,
    name: "persian",
    type: ["normal"],
    stats: { hp: 65, attack: 70, defense: 60, speed: 115, special: 65 },
    description:
      "Although its fur has many admirers it is tough to raise as a pet because of its fickle meanness.",
  },
  {
    id: 54,
    name: "psyduck",
    type: ["water"],
    stats: { hp: 50, attack: 52, defense: 48, speed: 55, special: 50 },
    description:
      "While lulling its enemies with its vacant look this wily Pokemon will use psychokinetic powers.",
  },
  {
    id: 55,
    name: "golduck",
    type: ["water"],
    stats: { hp: 80, attack: 82, defense: 78, speed: 85, special: 80 },
    description:
      "Often seen swimming elegantly by lake shores. It is often mistaken for the Japanese monster Kappa.",
  },
  {
    id: 56,
    name: "mankey",
    type: ["fighting"],
    stats: { hp: 40, attack: 80, defense: 35, speed: 70, special: 35 },
    description:
      "Extremely quick to anger. It could be docile one moment then thrashing away the next instant.",
  },
  {
    id: 57,
    name: "primeape",
    type: ["fighting"],
    stats: { hp: 65, attack: 105, defense: 60, speed: 95, special: 60 },
    description:
      "Always furious and tenacious to boot. It will not abandon chasing its quarry until it is caught.",
  },
  {
    id: 58,
    name: "growlithe",
    type: ["fire"],
    stats: { hp: 55, attack: 70, defense: 45, speed: 60, special: 50 },
    description:
      "Very protective of its territory. It will bark and bite to repel intruders from its space.",
  },
  {
    id: 59,
    name: "arcanine",
    type: ["fire"],
    stats: { hp: 90, attack: 110, defense: 80, speed: 95, special: 80 },
    description:
      "A Pokemon that has been admired since the past for its beauty. It runs agilely as if on wings.",
  },
  {
    id: 60,
    name: "poliwag",
    type: ["water"],
    stats: { hp: 40, attack: 50, defense: 40, speed: 90, special: 40 },
    description:
      "Its newly grown legs prevent it from running. It appears to prefer swimming than trying to stand.",
  },
  {
    id: 61,
    name: "poliwhirl",
    type: ["water"],
    stats: { hp: 65, attack: 65, defense: 65, speed: 90, special: 50 },
    description:
      "Capable of living in or out of water. When out of water it sweats to keep its body slimy.",
  },
  {
    id: 62,
    name: "poliwrath",
    type: ["water", "fighting"],
    stats: { hp: 90, attack: 85, defense: 95, speed: 70, special: 70 },
    description:
      "An adept swimmer at both the front crawl and breast stroke. Easily overtakes the best human swimmers.",
  },
  {
    id: 63,
    name: "abra",
    type: ["psychic"],
    stats: { hp: 25, attack: 20, defense: 15, speed: 90, special: 105 },
    description:
      "Using its ability to read minds it will identify impending danger and TELEPORT to safety.",
  },
  {
    id: 64,
    name: "kadabra",
    type: ["psychic"],
    stats: { hp: 40, attack: 35, defense: 30, speed: 105, special: 120 },
    description:
      "It emits special alpha waves from its body that induce headaches just by being close by.",
  },
  {
    id: 65,
    name: "alakazam",
    type: ["psychic"],
    stats: { hp: 55, attack: 50, defense: 45, speed: 120, special: 135 },
    description:
      "Its brain can outperform a supercomputer. Its intelligence quotient is said to be 5000.",
  },
  {
    id: 66,
    name: "machop",
    type: ["fighting"],
    stats: { hp: 70, attack: 80, defense: 50, speed: 35, special: 35 },
    description:
      "Loves to build its muscles. It trains in all styles of martial arts to become even stronger.",
  },
  {
    id: 67,
    name: "machoke",
    type: ["fighting"],
    stats: { hp: 80, attack: 100, defense: 70, speed: 45, special: 50 },
    description:
      "Its muscular body is so powerful it must wear a power save belt to be able to regulate its motions.",
  },
  {
    id: 68,
    name: "machamp",
    type: ["fighting"],
    stats: { hp: 90, attack: 130, defense: 80, speed: 55, special: 65 },
    description:
      "Using its heavy muscles it throws powerful punches that can send the victim clear over the horizon.",
  },
  {
    id: 69,
    name: "bellsprout",
    type: ["grass", "poison"],
    stats: { hp: 50, attack: 75, defense: 35, speed: 40, special: 70 },
    description:
      "A carnivorous Pokemon that traps and eats bugs. It uses its root feet to soak up needed moisture.",
  },
  {
    id: 70,
    name: "weepinbell",
    type: ["grass", "poison"],
    stats: { hp: 65, attack: 90, defense: 50, speed: 55, special: 85 },
    description:
      "It spits out POISONPOWDER to immobilize the enemy and then finishes it with a spray of ACID.",
  },
  {
    id: 71,
    name: "victreebel",
    type: ["grass", "poison"],
    stats: { hp: 80, attack: 105, defense: 65, speed: 70, special: 100 },
    description:
      "Said to live in huge colonies deep in jungles although no one has ever returned from there.",
  },
  {
    id: 72,
    name: "tentacool",
    type: ["water", "poison"],
    stats: { hp: 40, attack: 40, defense: 35, speed: 70, special: 100 },
    description:
      "Drifts in shallow seas. Anglers who hook them by accident are often punished by its stinging acid.",
  },
  {
    id: 73,
    name: "tentacruel",
    type: ["water", "poison"],
    stats: { hp: 80, attack: 70, defense: 65, speed: 100, special: 120 },
    description:
      "The tentacles are normally kept short. On hunts they are extended to ensnare and immobilize prey.",
  },
  {
    id: 74,
    name: "geodude",
    type: ["rock", "ground"],
    stats: { hp: 40, attack: 80, defense: 100, speed: 20, special: 30 },
    description:
      "Found in fields and mountains. Mistaking them for boulders people often step or trip on them.",
  },
  {
    id: 75,
    name: "graveler",
    type: ["rock", "ground"],
    stats: { hp: 55, attack: 95, defense: 115, speed: 35, special: 45 },
    description:
      "Rolls down slopes to move. It rolls over any obstacle without slowing or changing its direction.",
  },
  {
    id: 76,
    name: "golem",
    type: ["rock", "ground"],
    stats: { hp: 80, attack: 110, defense: 130, speed: 45, special: 55 },
    description:
      "Its boulder-like body is extremely hard. It can easily withstand dynamite blasts without damage.",
  },
  {
    id: 77,
    name: "ponyta",
    type: ["fire"],
    stats: { hp: 50, attack: 85, defense: 55, speed: 90, special: 65 },
    description:
      "Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.",
  },
  {
    id: 78,
    name: "rapidash",
    type: ["fire"],
    stats: { hp: 65, attack: 100, defense: 70, speed: 105, special: 80 },
    description:
      "Very competitive this Pokemon will chase anything that moves fast in the hopes of racing it.",
  },
  {
    id: 79,
    name: "slowpoke",
    type: ["water", "psychic"],
    stats: { hp: 90, attack: 65, defense: 65, speed: 15, special: 40 },
    description:
      "Incredibly slow and dopey. It takes 5 seconds for it to feel pain when under attack.",
  },
  {
    id: 80,
    name: "slowbro",
    type: ["water", "psychic"],
    stats: { hp: 95, attack: 75, defense: 110, speed: 30, special: 80 },
    description:
      "The SHELLDER that is latched onto SLOWPOKE's tail is said to feed on the host's left over scraps.",
  },
  {
    id: 81,
    name: "magnemite",
    type: ["electric"],
    stats: { hp: 25, attack: 35, defense: 70, speed: 45, special: 95 },
    description:
      "Uses anti-gravity to stay suspended. Appears without warning and uses THUNDER WAVE and similar moves.",
  },
  {
    id: 82,
    name: "magneton",
    type: ["electric"],
    stats: { hp: 50, attack: 60, defense: 95, speed: 70, special: 120 },
    description:
      "Formed by several MAGNEMITEs linked together. They frequently appear when sunspots flare up.",
  },
  {
    id: 83,
    name: "farfetch'd",
    type: ["normal", "flying"],
    stats: { hp: 52, attack: 65, defense: 55, speed: 60, special: 58 },
    description:
      "The sprig of green onions it holds is its weapon. It is used much like a metal sword.",
  },
  {
    id: 84,
    name: "doduo",
    type: ["normal", "flying"],
    stats: { hp: 35, attack: 85, defense: 45, speed: 75, special: 35 },
    description:
      "A bird that makes up for its poor flying with its fast foot speed. Leaves giant footprints.",
  },
  {
    id: 85,
    name: "dodrio",
    type: ["normal", "flying"],
    stats: { hp: 60, attack: 110, defense: 70, speed: 100, special: 60 },
    description:
      "Uses its three brains to execute complex plans. While two heads sleep one head stays awake.",
  },
  {
    id: 86,
    name: "seel",
    type: ["water"],
    stats: { hp: 65, attack: 45, defense: 55, speed: 45, special: 70 },
    description:
      "The protruding horn on its head is very hard. It is used for bashing through thick ice.",
  },
  {
    id: 87,
    name: "dewgong",
    type: ["water", "ice"],
    stats: { hp: 90, attack: 70, defense: 80, speed: 70, special: 95 },
    description:
      "Stores thermal energy in its body. Swims at a steady 8 knots even in intensely cold waters.",
  },
  {
    id: 88,
    name: "grimer",
    type: ["poison"],
    stats: { hp: 80, attack: 80, defense: 50, speed: 25, special: 40 },
    description:
      "Appears in filthy areas. Thrives by sucking up polluted sludge that is pumped out of factories.",
  },
  {
    id: 89,
    name: "muk",
    type: ["poison"],
    stats: { hp: 105, attack: 105, defense: 75, speed: 50, special: 65 },
    description:
      "Thickly covered with a filthy vile sludge. It is so toxic even its footprints contain poison.",
  },
  {
    id: 90,
    name: "shellder",
    type: ["water"],
    stats: { hp: 30, attack: 65, defense: 100, speed: 40, special: 45 },
    description:
      "Its hard shell repels any kind of attack. It is vulnerable only when its shell is open.",
  },
  {
    id: 91,
    name: "cloyster",
    type: ["water", "ice"],
    stats: { hp: 50, attack: 95, defense: 180, speed: 70, special: 85 },
    description:
      "When attacked it launches its horns in quick volleys. Its innards have never been seen.",
  },
  {
    id: 92,
    name: "gastly",
    type: ["ghost", "poison"],
    stats: { hp: 30, attack: 35, defense: 30, speed: 80, special: 100 },
    description:
      "Almost invisible this gaseous Pokemon cloaks the target and puts it to sleep without notice.",
  },
  {
    id: 93,
    name: "haunter",
    type: ["ghost", "poison"],
    stats: { hp: 45, attack: 50, defense: 45, speed: 95, special: 115 },
    description:
      "Because of its ability to slip through block walls it is said to be from another dimension.",
  },
  {
    id: 94,
    name: "gengar",
    type: ["ghost", "poison"],
    stats: { hp: 60, attack: 65, defense: 60, speed: 110, special: 130 },
    description:
      "Under a full moon this Pokemon likes to mimic the shadows of people and laugh at their fright.",
  },
  {
    id: 95,
    name: "onix",
    type: ["rock", "ground"],
    stats: { hp: 35, attack: 45, defense: 160, speed: 70, special: 30 },
    description:
      "As it grows the stone portions of its body harden to become similar to a diamond but colored black.",
  },
  {
    id: 96,
    name: "drowzee",
    type: ["psychic"],
    stats: { hp: 60, attack: 48, defense: 45, speed: 42, special: 90 },
    description:
      "Puts enemies to sleep then eats their dreams. Occasionally gets sick from eating bad dreams.",
  },
  {
    id: 97,
    name: "hypno",
    type: ["psychic"],
    stats: { hp: 85, attack: 73, defense: 70, speed: 67, special: 115 },
    description:
      "When it locks eyes with an enemy it will use a mix of PSI moves such as HYPNOSIS and CONFUSION.",
  },
  {
    id: 98,
    name: "krabby",
    type: ["water"],
    stats: { hp: 30, attack: 105, defense: 90, speed: 50, special: 25 },
    description:
      "Its pincers are not only powerful weapons they are used for balance when walking sideways.",
  },
  {
    id: 99,
    name: "kingler",
    type: ["water"],
    stats: { hp: 55, attack: 130, defense: 115, speed: 75, special: 50 },
    description:
      "The large pincer has 10000 hp of crushing power. However its huge size makes it unwieldy to use.",
  },
  {
    id: 100,
    name: "voltorb",
    type: ["electric"],
    stats: { hp: 40, attack: 30, defense: 50, speed: 100, special: 55 },
    description:
      "Usually found in power plants. Easily mistaken for a Pokeball they have zapped many people.",
  },
  {
    id: 101,
    name: "electrode",
    type: ["electric"],
    stats: { hp: 60, attack: 50, defense: 70, speed: 140, special: 80 },
    description:
      "It stores electric energy under very high pressure. It often explodes with little or no provocation.",
  },
  {
    id: 102,
    name: "exeggcute",
    type: ["grass", "psychic"],
    stats: { hp: 60, attack: 40, defense: 80, speed: 40, special: 60 },
    description:
      "Often mistaken for eggs. When disturbed they quickly gather and attack in swarms.",
  },
  {
    id: 103,
    name: "exeggutor",
    type: ["grass", "psychic"],
    stats: { hp: 95, attack: 95, defense: 85, speed: 55, special: 125 },
    description:
      "Legend has it that on rare occasions one of its heads will drop off and continue on as an EXEGGCUTE.",
  },
  {
    id: 104,
    name: "cubone",
    type: ["ground"],
    stats: { hp: 50, attack: 50, defense: 95, speed: 35, special: 40 },
    description:
      "Because it never removes its skull helmet no one has ever seen this Pokemon's real face.",
  },
  {
    id: 105,
    name: "marowak",
    type: ["ground"],
    stats: { hp: 60, attack: 80, defense: 110, speed: 45, special: 50 },
    description:
      "The bone it holds is its key weapon. It throws the bone skillfully like a boomerang to KO targets.",
  },
  {
    id: 106,
    name: "hitmonlee",
    type: ["fighting"],
    stats: { hp: 50, attack: 120, defense: 53, speed: 87, special: 35 },
    description:
      "When in a hurry its legs lengthen progressively. It runs smoothly with extra long loping strides.",
  },
  {
    id: 107,
    name: "hitmonchan",
    type: ["fighting"],
    stats: { hp: 50, attack: 105, defense: 79, speed: 76, special: 35 },
    description:
      "While apparently doing nothing it fires punches in lightning fast volleys that are impossible to see.",
  },
  {
    id: 108,
    name: "lickitung",
    type: ["normal"],
    stats: { hp: 90, attack: 55, defense: 75, speed: 30, special: 60 },
    description:
      "Its tongue can be extended like a chameleon's. It leaves a tingling sensation when it licks enemies.",
  },
  {
    id: 109,
    name: "koffing",
    type: ["poison"],
    stats: { hp: 40, attack: 65, defense: 95, speed: 35, special: 60 },
    description:
      "Because it stores several kinds of toxic gases in its body it is prone to exploding without warning.",
  },
  {
    id: 110,
    name: "weezing",
    type: ["poison"],
    stats: { hp: 65, attack: 90, defense: 120, speed: 60, special: 85 },
    description:
      "Where two kinds of poison gases meet 2 KOFFINGs can fuse into a WEEZING over many years.",
  },
  {
    id: 111,
    name: "rhyhorn",
    type: ["ground", "rock"],
    stats: { hp: 80, attack: 85, defense: 95, speed: 25, special: 30 },
    description:
      "Its massive bones are 1000 times harder than human bones. It can easily knock a trailer flying.",
  },
  {
    id: 112,
    name: "rhydon",
    type: ["ground", "rock"],
    stats: { hp: 105, attack: 130, defense: 120, speed: 40, special: 45 },
    description:
      "Protected by an armor-like hide it is capable of living in molten lava of 3600 degrees.",
  },
  {
    id: 113,
    name: "chansey",
    type: ["normal"],
    stats: { hp: 250, attack: 5, defense: 5, speed: 50, special: 105 },
    description:
      "A rare and elusive Pokemon that is said to bring happiness to those who manage to get it.",
  },
  {
    id: 114,
    name: "tangela",
    type: ["grass"],
    stats: { hp: 65, attack: 55, defense: 115, speed: 60, special: 100 },
    description:
      "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.",
  },
  {
    id: 115,
    name: "kangaskhan",
    type: ["normal"],
    stats: { hp: 105, attack: 95, defense: 80, speed: 90, special: 40 },
    description:
      "The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
  },
  {
    id: 116,
    name: "horsea",
    type: ["water"],
    stats: { hp: 30, attack: 40, defense: 70, speed: 60, special: 70 },
    description:
      "Known to shoot down flying bugs with precision blasts of ink from the surface of the water.",
  },
  {
    id: 117,
    name: "seadra",
    type: ["water"],
    stats: { hp: 55, attack: 65, defense: 95, speed: 85, special: 95 },
    description:
      "Capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
  },
  {
    id: 118,
    name: "goldeen",
    type: ["water"],
    stats: { hp: 45, attack: 67, defense: 60, speed: 63, special: 50 },
    description:
      "Its tail fin billows like an elegant ballroom dress giving it the nickname of the Water Queen.",
  },
  {
    id: 119,
    name: "seaking",
    type: ["water"],
    stats: { hp: 80, attack: 92, defense: 65, speed: 68, special: 80 },
    description:
      "In the autumn spawning season they can be seen swimming powerfully up rivers and creeks.",
  },
  {
    id: 120,
    name: "staryu",
    type: ["water"],
    stats: { hp: 30, attack: 45, defense: 55, speed: 85, special: 70 },
    description:
      "An enigmatic Pokemon that can effortlessly regenerate any appendage it loses in battle.",
  },
  {
    id: 121,
    name: "starmie",
    type: ["water", "psychic"],
    stats: { hp: 60, attack: 75, defense: 85, speed: 115, special: 100 },
    description:
      "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.",
  },
  {
    id: 122,
    name: "mr. mime",
    type: ["psychic"],
    stats: { hp: 40, attack: 45, defense: 65, speed: 90, special: 100 },
    description:
      "If interrupted while it is miming it will slap around the offender with its broad hands.",
  },
  {
    id: 123,
    name: "scyther",
    type: ["bug", "flying"],
    stats: { hp: 70, attack: 110, defense: 80, speed: 105, special: 55 },
    description:
      "With ninja-like agility and speed it can create the illusion that there is more than one.",
  },
  {
    id: 124,
    name: "jynx",
    type: ["ice", "psychic"],
    stats: { hp: 65, attack: 50, defense: 35, speed: 95, special: 95 },
    description:
      "It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.",
  },
  {
    id: 125,
    name: "electabuzz",
    type: ["electric"],
    stats: { hp: 65, attack: 83, defense: 57, speed: 105, special: 85 },
    description:
      "Normally found near power plants they can wander away and cause major blackouts in cities.",
  },
  {
    id: 126,
    name: "magmar",
    type: ["fire"],
    stats: { hp: 65, attack: 95, defense: 57, speed: 93, special: 85 },
    description:
      "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
  },
  {
    id: 127,
    name: "pinsir",
    type: ["bug"],
    stats: { hp: 65, attack: 125, defense: 100, speed: 85, special: 55 },
    description:
      "If it fails to crush the victim in its pincers it will swing it around and toss it hard.",
  },
  {
    id: 128,
    name: "tauros",
    type: ["normal"],
    stats: { hp: 75, attack: 100, defense: 95, speed: 110, special: 70 },
    description:
      "When it targets an enemy it charges furiously while whipping its body with its long tails.",
  },
  {
    id: 129,
    name: "magikarp",
    type: ["water"],
    stats: { hp: 20, attack: 10, defense: 55, speed: 80, special: 20 },
    description:
      "In the distant past it was somewhat stronger than the horribly weak descendants that exist today.",
  },
  {
    id: 130,
    name: "gyarados",
    type: ["water", "flying"],
    stats: { hp: 95, attack: 125, defense: 79, speed: 81, special: 100 },
    description:
      "Rarely seen in the wild. Huge and vicious it is capable of destroying entire cities in a rage.",
  },
  {
    id: 131,
    name: "lapras",
    type: ["water", "ice"],
    stats: { hp: 130, attack: 85, defense: 80, speed: 60, special: 95 },
    description:
      "A Pokemon that has been overhunted almost to extinction. It can ferry people across the water.",
  },
  {
    id: 132,
    name: "ditto",
    type: ["normal"],
    stats: { hp: 48, attack: 48, defense: 48, speed: 48, special: 48 },
    description:
      "Capable of copying an enemy's genetic code to instantly transform itself into a duplicate of the enemy.",
  },
  {
    id: 133,
    name: "eevee",
    type: ["normal"],
    stats: { hp: 55, attack: 55, defense: 50, speed: 55, special: 65 },
    description:
      "Its genetic code is irregular. It may mutate if it is exposed to radiation from element STONEs.",
  },
  {
    id: 134,
    name: "vaporeon",
    type: ["water"],
    stats: { hp: 130, attack: 65, defense: 60, speed: 65, special: 110 },
    description:
      "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.",
  },
  {
    id: 135,
    name: "jolteon",
    type: ["electric"],
    stats: { hp: 65, attack: 65, defense: 60, speed: 130, special: 110 },
    description:
      "It accumulates negative ions in the atmosphere to blast out 10000- volt lightning bolts.",
  },
  {
    id: 136,
    name: "flareon",
    type: ["fire"],
    stats: { hp: 65, attack: 130, defense: 60, speed: 65, special: 110 },
    description:
      "When storing thermal energy in its body its temperature could soar to over 1600 degrees.",
  },
  {
    id: 137,
    name: "porygon",
    type: ["normal"],
    stats: { hp: 65, attack: 60, defense: 70, speed: 40, special: 75 },
    description:
      "A Pokemon that consists entirely of programming code. Capable of moving freely in cyberspace.",
  },
  {
    id: 138,
    name: "omanyte",
    type: ["rock", "water"],
    stats: { hp: 35, attack: 40, defense: 100, speed: 35, special: 90 },
    description:
      "Although long extinct in rare cases it can be genetically resurrected from fossils.",
  },
  {
    id: 139,
    name: "omastar",
    type: ["rock", "water"],
    stats: { hp: 70, attack: 60, defense: 125, speed: 55, special: 115 },
    description:
      "A prehistoric Pokemon that died out when its heavy shell made it impossible to catch prey.",
  },
  {
    id: 140,
    name: "kabuto",
    type: ["rock", "water"],
    stats: { hp: 30, attack: 80, defense: 90, speed: 55, special: 45 },
    description:
      "A Pokemon that was resurrected from a fossil found in what was once the ocean floor eons ago.",
  },
  {
    id: 141,
    name: "kabutops",
    type: ["rock", "water"],
    stats: { hp: 60, attack: 115, defense: 105, speed: 80, special: 70 },
    description:
      "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.",
  },
  {
    id: 142,
    name: "aerodactyl",
    type: ["rock", "flying"],
    stats: { hp: 80, attack: 105, defense: 65, speed: 130, special: 60 },
    description:
      "A ferocious prehistoric Pokemon that goes for the enemy's throat with its serrated saw-like fangs.",
  },
  {
    id: 143,
    name: "snorlax",
    type: ["normal"],
    stats: { hp: 160, attack: 110, defense: 65, speed: 30, special: 65 },
    description:
      "Very lazy. Just eats and sleeps. As its rotund bulk builds it becomes steadily more slothful.",
  },
  {
    id: 144,
    name: "articuno",
    type: ["ice", "flying"],
    stats: { hp: 90, attack: 85, defense: 100, speed: 85, special: 125 },
    description:
      "A legendary bird Pokemon that is said to appear to doomed people who are lost in icy mountains.",
  },
  {
    id: 145,
    name: "zapdos",
    type: ["electric", "flying"],
    stats: { hp: 90, attack: 90, defense: 85, speed: 100, special: 125 },
    description:
      "A legendary bird Pokemon that is said to appear from clouds while dropping enormous lightning bolts.",
  },
  {
    id: 146,
    name: "moltres",
    type: ["fire", "flying"],
    stats: { hp: 90, attack: 100, defense: 90, speed: 90, special: 125 },
    description:
      "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
  },
  {
    id: 147,
    name: "dratini",
    type: ["dragon"],
    stats: { hp: 41, attack: 64, defense: 45, speed: 50, special: 50 },
    description:
      "Long considered a mythical Pokemon until recently when a small colony was found living underwater.",
  },
  {
    id: 148,
    name: "dragonair",
    type: ["dragon"],
    stats: { hp: 61, attack: 84, defense: 65, speed: 70, special: 70 },
    description:
      "A mystical Pokemon that exudes a gentle aura. Has the ability to change climate conditions.",
  },
  {
    id: 149,
    name: "dragonite",
    type: ["dragon", "flying"],
    stats: { hp: 91, attack: 134, defense: 95, speed: 80, special: 100 },
    description:
      "An extremely rarely seen marine Pokemon. Its intelligence is said to match that of humans.",
  },
  {
    id: 150,
    name: "mewtwo",
    type: ["psychic"],
    stats: { hp: 106, attack: 110, defense: 90, speed: 130, special: 154 },
    description:
      "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
  },
  {
    id: 151,
    name: "mew",
    type: ["psychic"],
    stats: { hp: 100, attack: 100, defense: 100, speed: 100, special: 100 },
    description:
      "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
  },
];

pokemons.forEach((pokemon) => {
  pokemon.isDiscovered = false;
});

export { pokemons };
