
const gradeLogic = {
{
  "0": {
    "addition": {
      "level_1": "add within 5 (e.g., 2 + 3)",
      "level_2": "add within 10 (e.g., 6 + 3)",
      "level_3": "add within 15 (e.g., 9+5)",
      "level_4": "add within 20 (e.g., 9+8)",
      "level_5": "add within 25 (e.g., 19+6)"
    },
    "subtraction": {},
    "multiplication": {},
    "division": {}
  },
  "1": {
    "addition": {
      "level_1": "add 2-digit + 1-digit (with carry)",
      "level_2": "add 2-digit + 2-digit  within 50 (no carry)",
      "level_3": "add 2-digit + 2-digit (no carry)",
      "level_4": "add 2-digit + 2-digit ( carry) sum under 99",
      "level_5": "add 2-digit + 2-digit ( carry)"
    },
    "subtraction": {
      "level_3": "subtract within 10",
      "level_4": "2-digit - 1-digit (no regroup)",
      "level_5": "2-digit - 2-digit (with regroup) within 40"
    },
    "multiplication": {},
    "division": {}
  },
  "2": {
    "addition": {
      "level_1": "add 2-digit + 2-digit ( carry) sum under 99",
      "level_2": "add 2-digit + 2-digit ( carry)",
      "level_3": "add 3-digit + 1-digit ( carry)",
      "level_4": "add 3-digit + 2-digit ( no carry)",
      "level_5": "add 3-digit + 2-digit ( carry)"
    },
    "subtraction": {
      "level_1": "2-digit - 1-digit (no regroup)",
      "level_2": "2-digit - 2-digit (with regroup) within 40",
      "level_3": "2-digit - 2-digit (with regroup)",
      "level_4": "3-digit - 2-digit (with regroup)",
      "level_5": "3-digit - 2-digit (with regroup)"
    },
    "multiplication": {
      "level_1": "multiply within 2s table (ie 2x3,2x8)",
      "level_2": "multiply within 3s table (ie 3x4, 3x7)",
      "level_3": "multiply within 4s or 5 table (4x6, 4x7, 5x9)",
      "level_4": "multiply within 6s or 7 table (4x6, 4x7, 7x9)",
      "level_5": "single-digit \u00d7 single-digit"
    },
    "division": {}
  },
  "3": {
    "addition": {
      "level_1": "add 3-digit + 2-digit ( no carry)",
      "level_2": "add 3-digit + 2-digit ( carry)",
      "level_3": "3-digit + 3-digit (carry once)",
      "level_4": "3-digit + 3-digit (carry twice)",
      "level_5": "3-digit + 3-digit"
    },
    "subtraction": {
      "level_1": "3-digit - 2-digit (with regroup)",
      "level_2": "3-digit - 2-digit (with regroup)",
      "level_3": "3-digit - 3-digit (borrow twice)",
      "level_4": "3-digit - 3-digit (borrow twice)",
      "level_5": "3-digit - 3-digit (borrow twice)"
    },
    "multiplication": {
      "level_1": "multiply within 6s or 7 table (4x6, 4x7, 7x9)",
      "level_2": "single-digit \u00d7 single-digit",
      "level_3": "single-digit (max 5) \u00d7 2-digit (max 20 - ie 4x15)",
      "level_4": "single-digit \u00d7 2-digit (max 20 - ie 7x19)",
      "level_5": "single-digit \u00d7 2-digit (max 30 - ie 7x29)"
    },
    "division": {
      "level_5": "2-digit \u00f7 1-digit"
    }
  },
  "4": {
    "addition": {
      "level_1": "3-digit + 3-digit (carry twice)",
      "level_2": "3-digit + 3-digit",
      "level_3": "3-digit + 4-digit",
      "level_4": "3-digit + 4-digit",
      "level_5": "4-digit + 4-digit"
    },
    "subtraction": {
      "level_1": "3-digit - 3-digit (borrow twice)",
      "level_2": "3-digit - 3-digit (borrow twice)",
      "level_3": "4-digit - 3-digit (borrow twice)",
      "level_4": "4-digit - 3-digit (borrow 3 times)",
      "level_5": "4-digit - 3-digit (borrow 3 times)"
    },
    "multiplication": {
      "level_1": "single-digit (max 5) \u00d7 2-digit (max 20 - ie 4x15)",
      "level_2": "single-digit \u00d7 2-digit (max 20 - ie 7x19)",
      "level_3": "single-digit \u00d7 2-digit (max 30 - ie 7x29)",
      "level_4": "single-digit \u00d7 2-digit (max 50 - ie 7x49)",
      "level_5": "single-digit \u00d7 2-digit"
    },
    "division": {
      "level_1": "2-digit \u00f7 1-digit",
      "level_2": "2-digit \u00f7 1-digit",
      "level_3": "3-digit \u00f7 1-digit",
      "level_4": "3-digit \u00f7 1-digit",
      "level_5": "3-digit \u00f7 2-digit"
    }
  },
  "5": {
    "addition": {
      "level_1": "3-digit + 4-digit",
      "level_2": "4-digit + 4-digit",
      "level_3": "4-digit + 4-digit",
      "level_4": "4-digit + 5-digit",
      "level_5": "5-digit + 5-digit"
    },
    "subtraction": {
      "level_1": "4-digit - 3-digit (borrow 3 times)",
      "level_2": "4-digit - 3-digit (borrow 3 times)",
      "level_3": "4-digit - 4-digit (borrow 3 times)",
      "level_4": "4-digit - 4-digit (borrow 3 times)",
      "level_5": "5-digit - 5-digit (borrow 3 times)"
    },
    "multiplication": {
      "level_1": "single-digit \u00d7 2-digit (max 50 - ie 7x49)",
      "level_2": "single-digit \u00d7 2-digit",
      "level_3": "2-digit (multiple of 5) \u00d7 2-digit",
      "level_4": "2-digit (max50) \u00d7 2-digit (max50)",
      "level_5": "2-digit \u00d7 2-digit"
    },
    "division": {
      "level_1": "3-digit \u00f7 1-digit",
      "level_2": "3-digit \u00f7 2-digit",
      "level_3": "3-digit \u00f7 2-digit",
      "level_4": "3-digit \u00f7 2-digit",
      "level_5": "4-digit \u00f7 2-digit"
    }
  }
}
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Basic pattern matching to extract numbers and operation from description
function parsePattern(description) {
  description = description.toLowerCase();
  if (description.includes("add")) return { op: "+", min: 1, max: 20 };
  if (description.includes("subtract") || description.includes("-")) return { op: "-", min: 1, max: 20 };
  if (description.includes("multiply") || description.includes("×")) return { op: "*", min: 2, max: 10 };
  if (description.includes("divide") || description.includes("÷")) return { op: "/", min: 2, max: 10 };
  return null;
}

function generateQuestion(grade, level) {
  const operations = gradeLogic[grade];
  if (!operations) return fallbackQuestion();

  const levelKey = "level_" + level;
  const activeOps = [];

  for (const op in operations) {
    if (operations[op][levelKey]) {
      activeOps.push({ op, desc: operations[op][levelKey] });
    }
  }

  if (activeOps.length === 0) return fallbackQuestion();

  const chosen = activeOps[Math.floor(Math.random() * activeOps.length)];
  const pattern = parsePattern(chosen.desc);
  if (!pattern) return fallbackQuestion();

  let a = randomInt(pattern.min, pattern.max);
  let b = randomInt(pattern.min, pattern.max);

  if (pattern.op === "-" && b > a) [a, b] = [b, a]; // avoid negative results
  if (pattern.op === "/" && a % b !== 0) a = b * randomInt(1, 5); // clean division

  const answer = eval(`${a} ${pattern.op} ${b}`);
  const decoys = new Set();
  while (decoys.size < 3) {
    let offset = randomInt(-5, 5);
    let val = answer + offset;
    if (val !== answer && val >= 0) decoys.add(val);
  }

  const options = Array.from(decoys);
  options.push(answer);
  return {
    text: `What is ${a} ${pattern.op} ${b}?`,
    options: options.sort(() => Math.random() - 0.5),
    answer: answer.toString()
  };
}

function fallbackQuestion() {
  const a = randomInt(10, 99);
  const b = randomInt(10, 99);
  const answer = a + b;
  const decoys = new Set([answer + 10, answer - 10]);
  while (decoys.size < 3) {
    const offset = Math.floor(Math.random() * 11) - 5;
    const decoy = answer + offset;
    if (decoy !== answer && decoy > 0) decoys.add(decoy);
  }
  const options = Array.from(decoys);
  options.push(answer);
  return {
    text: `What is ${a} + ${b}?`,
    options: options.sort(() => Math.random() - 0.5),
    answer: answer.toString()
  };
}
