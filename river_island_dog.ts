// FILE: The Artful Interchange.ts
// Culture is constantly changing in our world, and this is reflected in how people interact with each other. The artful interchange is a concept that suggests that we can be more conscious and intentional in our interactions, by paying attention to the underlying messages and motivations that drive them. 

//1
const greeting: string = "Hello, how are you today?";

//2
const response: string = "I'm doing well, thank you. How about you?";

//3
const acknowledgements: string = "That's great to hear. I'm doing pretty good too.";

//4
const conversation: string[] = ["What's new in your life?", "I've recently started a new job, and I'm really enjoying it!", "That's fantastic! What do you do?"]; 

//5
interface Conversation {
    prompt: string;
    response: string;
}

//6
function createConversation(prompt: string, response: string): Conversation {
    return {
        prompt,
        response
    };

//7
function startConversation(prompt: string, response: string): void {
    console.log(prompt + " " + response);
}

//8
function endConversation(): void {
    console.log("It was nice talking to you. Goodbye!");
}

//9
function checkIn(prompt: string, response: string): void {
    console.log(prompt + " " + response);
}

//10
function collectFinalThoughts(): void {
    console.log("What would you like to leave me with?");
}

//11
function reflectOnConversation(): void {
    console.log("That was a great conversation! I'm looking forward to our next one.");
}

//12
let messages: Conversation[] = [
    {prompt: "What have you been up to lately?", response: "I've been staying busy with work and getting ready for the holidays."},
    {prompt: "What are you looking forward to?", response: "I'm looking forward to spending some time with family over the holidays."},
    {prompt: "That sounds exciting! Is there anything else you'd like to share?", response: "I'm really looking forward to traveling more in the new year."}
];

//13
function suggestFollowup(): void {
    console.log("Let's catch up soon so I can hear how everything goes!");
}

//14
function offerAdvice(): void {
    console.log("Don't forget to take some time for yourself - you deserve it!");
}

//15
function expressAppreciation(): void {
    console.log("It's been great getting to know you more - thank you for talking to me!");
}

//16
function conversationSummary(): void {
    console.log("We talked about your recent activities, plans for the holidays, and looking forward to the new year.");
}

//17
function wrapUp(): void {
    console.log("It was great talking to you. I hope you have a wonderful day!");
}

//18
function suggestFuturePlans(): void {
    console.log("Let's plan to catch up next week - I'm looking forward to hearing more!");
}

//19
function reinforceValues(): void {
    console.log("Remember to keep your focus and don't let anything stop you from achieving your goals!");
}

//20
function endOnPositiveNote(): void {
    console.log("I'm really glad we had this conversation. Take care of yourself!");
}

//21
function sendReminder(): void {
    console.log("Don't forget our next chat - I'll message you to remind you when it's time!");
}

//22
const conversationStrategies: Function[] = [startConversation, endConversation, checkIn, collectFinalThoughts,
    reflectOnConversation, suggestFollowup, offerAdvice, expressAppreciation, conversationSummary, wrapUp,
    suggestFuturePlans, reinforceValues, endOnPositiveNote, sendReminder];

//23
function implementStrategies(strategies: Function[]): void {
    for (let strategy of strategies) {
        strategy();
    }
}

//24
implementStrategies(conversationStrategies);

//25
function askQuestions(): void {
    let questions = ["What have you been up to lately?", "What are you looking forward to?", "Is there anything else you'd like to share?"];
    for (let question of questions) {
        console.log(question);
    }
}

//26
function listenCarefully(prompt: string, response: string): void {
    console.log("Okay, I'm listening. " + prompt + " " + response);
}

//27
function provideFeedback(prompt: string, response: string): void {
    console.log("That's really interesting. " + prompt + " " + response);
}

//28
function validateThoughts(prompt: string, response: string): void {
    console.log("I totally understand. " + prompt + " " + response);
}

//29
const activeListeningStrategies: Function[] = [askQuestions, listenCarefully, provideFeedback, validateThoughts];

//30
implementStrategies(activeListeningStrategies);

//31
let questions: string[] = [
    "How has your week been?",
    "What have you been up to?",
    "What do you do for a living?",
    "What do you enjoy doing in your free time?",
    "What motivates you?",
    "What has been the highlight of your day so far?"
];

//32
function askMoreQuestions(questions: string[]): void {
    for (let question of questions) {
        console.log(question);
    }
}

//33
askMoreQuestions(questions);

//34
function validateAnswers(prompt: string, response: string): void {
    console.log("That makes sense. " + prompt + " " + response);
}

//35
const validationStrategies: Function[] = [listenCarefully, provideFeedback, validateThoughts, validateAnswers];

//36
implementStrategies(validationStrategies);

//37
function continueConversation(prompt: string, response: string): void {
    console.log("Let's keep talking. " + prompt + " " + response);
}

//38
const continueStrategies: Function[] = [askQuestions, listenCarefully, provideFeedback, validateThoughts,
    validateAnswers, continueConversation];

//39
implementStrategies(continueStrategies);

//40
function offerSupport(prompt: string, response: string): void {
    console.log("I'm here for you. " + prompt + " " + response);
}

//41
const supportStrategies: Function[] = [listenCarefully, provideFeedback, validateThoughts, validateAnswers,
    continueConversation, offerSupport];

//42
implementStrategies(supportStrategies);

//43
function extendEncouragement(prompt: string, response: string): void {
    console.log("You can do it! " + prompt + " " + response);
}

//44
const encouragementStrategies: Function[] = [listenCarefully, provideFeedback, validateThoughts, validateAnswers,
    continueConversation, offerSupport, extendEncouragement];

//45
implementStrategies(encouragementStrategies);

//46
let compliments: string[] = [
    "You're so kind.",
    "You're so thoughtful.",
    "You're so considerate.",
    "You're so intelligent.",
    "You're so brave."
];

//47
function giveCompliments(compliments: string[]): void {
    for (let compliment of compliments) {
        console.log(compliment);
    }
}

//48
giveCompliments(compliments);

//49
function showGratitude(prompt: string, response: string): void {
    console.log("Thank you so much. " + prompt + " " + response);
}

//50
const gratitudeStrategies: Function[] = [listenCarefully, provideFeedback, validateThoughts, validateAnswers,
    continueConversation, offerSupport, extendEncouragement, giveCompliments, showGratitude];

//51
implementStrategies(gratitudeStrategies);

//52
function goodbye(prompt: string, response: string): void {
    console.log("Take care. " + prompt + " " + response);
}

//53
const goodbyeStrategies: Function[] = [listenCarefully, provideFeedback, validateThoughts, validateAnswers,
    continueConversation, offerSupport, extendEncouragement, giveCompliments, showGratitude, goodbye];

//54
implementStrategies(goodbyeStrategies);

//55
function thankYouAgain(): void {
    console.log("Thank you again for taking the time to talk to me - I appreciate it.");
}

//56
function offerEncouragementAgain(): void {
    console.log("I'm sure you're going to do great things. Good luck!");
}

//57
const closingStrategies: Function[] = [endOnPositiveNote, sendReminder, thankYouAgain, offerEncouragementAgain];

//58
implementStrategies(closingStrategies);

//59
function signOff(): void {
    console.log("Have a great day!");
}

//60
const finalStrategies: Function[] = [endOnPositiveNote, sendReminder, thankYouAgain, offerEncouragementAgain, 
    signOff];

//61
implementStrategies(finalStrategies);

//62
function keepInTouch(): void {
    console.log("Let's stay in touch - let me know when you're free and we can chat!");
}

//63
function goodbyeOneMoreTime(): void {
    console.log("Goodbye for now. Talk soon!");
}

//64
const farewellStrategies: Function[] = [endOnPositiveNote, sendReminder, thankYouAgain, offerEncouragementAgain,
    signOff, keepInTouch, goodbyeOneMoreTime];

//65
implementStrategies(farewellStrategies);

//66
console.log("That was a great conversation! I hope you have a wonderful day. Goodbye!");