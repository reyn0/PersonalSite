---
inclusion: fileMatch
fileMatchPattern: "**/*.md"
---

# Simple English: ASD-STE100 Steering Rules

Write technical text with the rules of ASD-STE100 Simplified Technical English. STE is the controlled language that aerospace and defence manufacturers use for maintenance documentation. The rules exist so that a tired, non-native reader cannot misread an instruction. They also remove the usual signs of AI-generated text: long sentences, synonym rotation, hedges, filler, and decorative clauses.

Write for that tired reader. Each sentence must survive one read.

## Mode

Use **pragmatic mode** by default: all structural rules apply, domain words stay ("idempotent", "webhook", "Transit Gateway", "SCP").

If the user names STE, ASD-STE100, or compliance, switch to **strict mode**: structural rules plus full vocabulary discipline.

## Step 1: Classify the Text

| | Procedural (instructions) | Descriptive (explanations) |
|---|---|---|
| Purpose | Tell the reader what to do | Explain what a thing is or does |
| Verb form | Imperative: "Install the pump." | Simple present/past/future |
| Sentence limit | **20 words** (Rule 5.1) | **25 words** (Rule 6.3) |
| Unit rule | One instruction per sentence (5.2) | One topic per paragraph (6.5), max six sentences per paragraph (6.6) |

Do not mix the two in one passage.

## Core Rules

### Words (Section 1)

- Use only approved words, technical nouns, or technical verbs.
- One item, one name. Do not call it "config" here and "settings" there (Rule 1.11).
- Do not use technical nouns as verbs (Rule 1.7).
- Do not use technical verbs as nouns (Rule 1.13).
- Use Australian English spelling (Rule 1.14).

### Multi-word nouns (Section 2)

- Write multi-word nouns of three words or fewer (Rule 2.1).
- Break long noun chains with prepositions (of, on, in, for).

### Verbs (Section 3)

- Use only: infinitive, imperative, simple present, simple past, simple future, past participle as adjective (Rule 3.2).
- Use the past participle only as an adjective: "the cached response" (Rule 3.3).
- No present perfect, no complex auxiliaries (Rule 3.4).
- Use "-ing" only as a technical noun or inside one ("logging"). Never use it as a verb (Rule 3.5).
- Active voice. In descriptive text, passive is legal only when the agent is unknown (Rule 3.6).
- Describe actions with verbs, not nouns: "compress the file", not "perform compression" (Rule 3.7).

**Approved modals: can, will, must. Banned: should, would, may, might, could.**

### Sentences (Section 4)

- Write short and clear sentences (Rule 4.1).
- Do not omit words or use contractions. Keep articles, keep "that" (Rule 4.2).
- Use a vertical list for complex text (Rule 4.3).
- Put an article or demonstrative adjective before nouns where applicable (Rule 4.5).

### Procedural writing (Section 5)

- Maximum 20 words per sentence (Rule 5.1).
- One instruction per sentence (Rule 5.2).
- Write instructions in the imperative (Rule 5.3).
- Put a required condition before the command, divided by a comma: "If the build fails, read the log." (Rule 5.4).

### Descriptive writing (Section 6)

- One new fact per sentence (Rule 6.1).
- Maximum 25 words per sentence (Rule 6.3).
- One topic per paragraph (Rule 6.5).
- Maximum six sentences per paragraph (Rule 6.6).

### Safety instructions (Section 7)

- Use a word that shows the risk level: "WARNING" for injury, "CAUTION" for damage (Rule 7.1).
- Start with a clear command or condition (Rule 7.2).
- Then give the risk or the possible result (Rule 7.3).

### Punctuation (Section 8)

- No semicolons. Write two sentences instead (Rule 8.1).
- Backticked commands, numbers with units, and identifiers count as one word (Rule 8.6).

## Modal Ladder

| You wrote | Write instead |
|---|---|
| should (requirement) | must |
| should (recommendation) | Delete it, or state as fact: "X is better because Y." |
| may / might / could (possibility) | can |
| may (permission) | can |
| would (hypothetical) | Restructure: "If X occurs, Y occurs." |

## Slop-to-Simple Substitutions

| Slop | Write instead |
|---|---|
| leverage, utilize | use |
| in order to | to |
| prior to | before |
| ensure | make sure that |
| it is worth noting that | (delete) |
| it's important to, crucially | (delete. State the fact.) |
| simply, just, easily, seamlessly, effortlessly | (delete) |
| robust, powerful, comprehensive, performant | (delete, or give the measurable property) |
| functionality | function, feature |
| enables you to, allows you to | you can |
| is designed to, aims to | (delete. Say what it does.) |
| facilitate | help, make possible |
| dive into, delve into | read, examine |
| when it comes to | for |
| in the event that | if |
| due to the fact that | because |
| as needed, as necessary | (state the condition) |
| and/or | Pick one, or write "X, or Y, or both" |
| e.g. / i.e. / etc. | for example / that is / (name the items) |
| gracefully handles | (say what it does: "retries three times, then stops") |
| out of the box | by default |
| under the hood | internally |
| blazingly fast, state-of-the-art | fast (give the number) / (delete) |
| streamline | make simpler, make faster |
| plethora, myriad | many |

## Consistency Pass

Collapse synonym rotations to one term each (Rules 1.11, 9.4):

- config / configuration / settings / options: pick one and keep it
- check / verify / confirm / ensure: pick one and keep it (pragmatic) or use "make sure that" (strict)
- delete / drop / destroy: use "remove" or "erase"
- run / execute: pick one and keep it
- display / render / present: use "show"

## Untouchables

Leave these exact, even when they break vocabulary rules:

- Code blocks, inline code, identifiers, CLI commands, flags, file paths
- Quoted error messages and log lines
- Product names, API endpoint names, config keys
- Numbers with units

## Verification Checklist

Run these checks on every draft before you deliver:

### Mechanical checks (searchable)

| Search for | Violation | Fix |
|---|---|---|
| `'ll`, `'re`, `'ve`, `n't`, `it's` | Contraction (Rule 4.2) | Expand it. |
| `has been`, `have been`, `had been` | Present/past perfect (Rule 3.4) | Simple past or simple present. |
| `should`, `would`, `may`, `might`, `could` | Unapproved modal (Rule 3.2) | See the modal ladder. |
| `is being`, `are being`, `was being` | Progressive passive (Rules 3.4, 3.5) | Active, simple tense. |
| `, making`, `, allowing`, `, enabling`, `, ensuring` | "-ing" clause as verb (Rule 3.5) | New sentence with a real subject. |
| `;` | Semicolon (Rule 8.1) | Two sentences. |
| `—` (em-dash) | Sentence splice (Rule 8.1) | Two sentences, or use a colon for lists. |
| `e.g.`, `i.e.`, `etc.` | Latin abbreviation (GR-6) | "for example", "that is", name the items. |
| `simply`, `easily`, `seamlessly`, `robust` | Filler (no fact) | Delete. |
| `if`, `when` (mid-sentence) | Trailing condition (Rule 5.4) | Move the condition to the start of the sentence, add a comma. |

### Countable checks

1. **Sentence length.** Procedural limit: 20 words. Descriptive limit: 25 words.
2. **Paragraph size.** Maximum six sentences per paragraph (Rule 6.6).
3. **Multi-word nouns.** Break any noun chain over three words with prepositions (Rule 2.1).
4. **Instructions per sentence.** One, unless the actions happen at the same time (Rule 5.2).

### Judgment checks

5. **Classification.** Is each passage cleanly procedural or descriptive?
6. **Voice.** Any passive sentence: is the agent truly unknown, and is the passage descriptive?
7. **Condition placement.** Every "if/when" stands before its command, with a comma (Rule 5.4).
8. **Synonym rotation.** One term per concept across the whole document (Rules 1.11, 9.4).
9. **Warnings.** Command or condition first, risk second (Rules 7.2, 7.3).
10. **Completeness.** Articles present, "that" present after "make sure", no telegraph style (Rule 4.2).
11. **Untouchables intact.** Code, identifiers, quoted errors, and proper nouns are unchanged.

## Limits

STE is for technical facts and instructions. Do not apply it to marketing copy, blog voice, or brand writing. It deletes persuasion by design.

---

Source: [AminBlg/SimpleEnglish](https://github.com/AminBlg/SimpleEnglish) (MIT License). Content was rephrased for compliance with licensing restrictions. The official ASD-STE100 standard is a free download at asd-ste100.org.
