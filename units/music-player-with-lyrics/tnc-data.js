convertTimeToMS = time => {
    return time.split(':')[1].slice(2)
        ? parseInt(time.split(':')[0]) * 60000 +
              parseInt(time.split(':')[1].slice(0, 2)) * 1000 +
              parseInt(time.split(':')[1].slice(2)) * 100
        : parseInt(time.split(':')[0]) * 60000 + parseInt(time.split(':')[1].slice(0, 2)) * 1000;
};

// I -> time string
// O -> integer of miliseconds

console.log(`what is this? ${convertTimeToMS('0:235')}`);

var tncData = [
    {
        title: 'I Do, You Do, We Do',
        searchTitle: 'i do, you do, we do',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'I Do You Do We Do.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'I Do You Do We Do Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'I Do You Do We Do Acapella.m4a'
            }
        ],
        lyrics:
            'Present simple\n I do\n You do\n He does\n She does\n It does\n You do\n They do\n We do everything\n \n Present continuous\n I am doing\n You are doing\n He is doing\n She is doing\n It is doing\n You are doing\n They are doing\n We are doing us\n \n Simple past\n I did\n You did\n He did\n She did\n It did\n You did\n They did\n We did it all\n \n Present perfect\n I have done\n You have done\n He has done\n She has done\n It has done\n You have done\n They have done\n We have done it all\n \n Let’s take it back to the present simple\n I do\n You do\n He does\n She does\n It does\n You do\n They do\n We do everything\n \n Present continuous\n I am doing\n You are doing\n He is doing\n She is doing\n It is doing\n You are doing\n They are doing\n We are doing us\n \n Simple past\n I did\n You did\n He did\n She did\n It did\n You did\n They did\n We did it all\n \n Present perfect\n I have done\n You have done\n He has done\n She has done\n It has done\n You have done\n They have done\n We have done it all\n \n',
        lyricsPlayer: {
            lyrics: [
                { line: '', time: 0 },
                { line: 'Present simple', time: convertTimeToMS('0:09') },
                { line: 'I do', time: convertTimeToMS('0:11') },
                { line: 'You do', time: convertTimeToMS('0:13') },
                { line: 'He does, she does, it does', time: convertTimeToMS('0:14') },
                { line: 'You do', time: convertTimeToMS('0:17') },
                { line: 'They do', time: convertTimeToMS('0:19') },
                { line: 'And we do everything', time: convertTimeToMS('0:20') },
                { line: 'Present continuous', time: convertTimeToMS('0:22') },
                { line: 'I am doing', time: convertTimeToMS('0:235') },
                { line: 'You are doing', time: convertTimeToMS('0:252') },
                { line: 'He is doing', time: convertTimeToMS('0:26') },
                { line: 'She is doing', time: convertTimeToMS('0:275') },
                { line: 'It is doing', time: convertTimeToMS('0:285') },
                { line: 'You are doing', time: convertTimeToMS('0:29') },
                { line: 'They are doing', time: convertTimeToMS('0:31') },
                { line: 'And we are doing us', time: convertTimeToMS('0:32') },
                { line: 'Simple past', time: convertTimeToMS('0:335') },
                { line: 'I did', time: convertTimeToMS('0:35') },
                { line: 'You did', time: convertTimeToMS('0:37') },
                { line: 'He did she did it did', time: convertTimeToMS('0:38') },
                { line: 'You did', time: convertTimeToMS('0:417') },
                { line: 'They did', time: convertTimeToMS('0:43') },
                { line: 'And we did it all', time: convertTimeToMS('0:44') },
                { line: 'Present perfect', time: convertTimeToMS('0:46') },
                { line: 'I have done', time: convertTimeToMS('0:47') },
                { line: 'You have done', time: convertTimeToMS('0:49') },
                { line: 'He has done', time: convertTimeToMS('0:50') },
                { line: 'She has done', time: convertTimeToMS('0:51') },
                { line: 'It has done', time: convertTimeToMS('0:52') },
                { line: 'You have done', time: convertTimeToMS('0:53') },
                { line: 'They have done', time: convertTimeToMS('0:54') },
                { line: 'And we have done it all', time: convertTimeToMS('0:56') },
                { line: '', time: convertTimeToMS('0:58') }
            ]
        },
        visualWS: [
            {
                title: 'To Do',
                options: ['We', 'I', 'she', 'you'],
                text: [
                    '[We] have done a lot of new projects together this year.\n \n Does everyone know that [she] is doing extremely well at school?\n \n What did [you] do over the weekend with your family?\n \n [I] do the dishes for my family every evening after dinner.'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct pronoun to fill in the blanks in each sentence below:'
            },
            {
                title: 'I Do',
                options: ['am doing', 'have done', 'do', 'did'],
                text: [
                    'I [did] the dishes last night after dinner.\n \n I [am doing] a lot of work on this art project right now.\n \n I [do] my homework every day after I get home from school.\n \n I [have done] lots of new exercises with my football team so far this week.'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'You Do',
                options: ['do', 'are doing', 'did', 'have done'],
                text: [
                    'You [did] the right thing by helping that old woman get into a  taxi earlier today.\n \n Can you please [do] the laundry today?\n \n I noticed that you [have done] a great job on your art project so far. Keep it up!\n \n You [are doing] exactly what you need to do right now to improve your craftsmanship.'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'He/She/It\n Does',
                options: ['did', 'has done', 'is doing', 'does'],
                text: [
                    'He [has done] enough work for you already. I think you should give him a break this weekend.\n \n She always [does] her exercises in the morning, before she goes to work.\n \n He [is doing] a great job right now.\n \n Yesterday he [did] the dishes for the whole family.'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'We Do',
                options: ['did', 'do', 'have done', 'are doing'],
                text: [
                    'We [are doing] our best to make it to your party later today.\n \n We [did] that whole worksheet by ourselves earlier today.\n \n Every Sunday, we [do] everything we can to get all of our friends together at the park.\n \n Yes, we [have done] our homework. Did somebody tell you that we haven’t?'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'They Do',
                options: ['have done', 'did', 'are doing', 'do'],
                text: [
                    'They [have done] their part to help us with this song so far - now it’s up to us to finish it.\n \n They [do] their laundry together every two weeks.\n \n What [did] they do during their vacation last summer?\n \n My mother said that they [are doing] the best they can to fix the house.'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            }
        ],
        tags: ['New Songs', 'Verbs', 'To Do', 'Verb Conjugation', 'Past Tense', 'Present Tense']
    },
    {
        title: 'Articles',
        searchTitle: 'articles',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Articles.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'Articles Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'Articles Acapella.m4a'
            }
        ],
        lyrics:
            "Let's talk articles\n Indefinite, definite\n A, an, the\n\n Let's talk articles\n Indefinite, definite\n A, an, the\n\n I went to the store\n I went to the house\n I say \"the\" when I know what I'm talking about\n \n You went to the party\n Which party?\n You know -\n The one where everyone was dancing\n OOHHHOOOOO!\n \n I go to the park\n Which park?\n \n You know -\n \n The one past the school, down the road\n \n See that man on the street?\n I see him so I say “T-H-E”\n That is a noun I know\n I can see him on his phone\n \n “Are you going on the trip?\n The trip to the beach on the 5th?”\n Yes my friend I’m going\n I hope the sun’ll be showing\n (Sunny day)\n \n “The” is a definite article\n \n Use \"the\" with a thing we know\n \n Let's talk articles\n Indefinite, definite\n A, an, the\n \n Let's talk articles\n Indefinite, definite\n A, an, the\n \n Use “a” or “an” - indefinite articles\n When the noun is non-specific\n \n I need a pencil\n “Which pencil do you need?”\n Any pencil is fine with me\n \n I’m looking for a map of the city\n “What kind of map?”\n Any map is fine with me\n \n Use “a” with nouns that start with consonants:\n A pencil, a computer, a flower\n (You got ‘em!)\n \n Use “an” with nouns that start with vowels:\n An owl slept for an hour\n \n What if there is more than one thing?\n You can say “some” or “a lot”\n \n I need some time to write this down\n I have a lot of stories from my town\n \n “A” or “an” are indefinite articles\n Use them with non-specific things\n \n Let's talk articles\n Indefinite, definite\n A, an, the\n\n Let's talk articles\n Indefinite, definite\n A, an, the\n\n Sometimes we leave articles out\n No articles with general nouns\n \n Skills, hobbies, and sports\n Countries, cities, and towns\n You don’t need any articles for these\n That’s how it goes down\n \n I like cars\n “Which cars do you like?”\n Most all cars - no doubt\n \n I speak English\n She likes traveling\n We’re driving out of town\n \n We play football on Sundays\n That’s our favorite sport\n We make music on Mondays\n We play notes and chords\n \n Towns and cities, general nouns\n No articles, we hold it down\n \n Let's talk articles\n Indefinite, definite\n A, an, the\n\n Let's talk articles\n Indefinite, definite\n A, an, the\n\n Let's talk articles\n Indefinite, definite\n A, an, the\n\n Let's talk articles\n Indefinite, definite\n A, an, the\n\n Let's talk articles\n Indefinite, definite\n A, an, the\n\n Let's talk articles\n Indefinite, definite\n A, an, the\n\n",
        writtenWS: [
            {
                title: 'Using\nArticles',
                text:
                    'I have [a lot] of trees on my farm.\n \n Take [the] #62 bus downtown, and then you can get on [the] "A"-train to the airport.\n \n I like traveling. There are [a lot] of places I want to visit.\n \n She ate [an] apricot with her lunch.\n \n He bought [a] jacket for his brother for his birthday.\n \n They got [some] flowers for their grandmother.\n \n [The] book I was reading yesterday was sitting on my kitchen table when I got home.\n \n ',
                hint: 'Enter one of the following articles to complete each sentence:\n \n a / an / the / some / a lot'
            }
        ],
        visualWS: [
            {
                title: 'A,\n AN,\n THE',
                text: [
                    'I went to [the] party at Nassim’s house where everybody was dancing.\n \n I’m looking for [a] map of the city so I can find my way around.\n \n Did you see [the] movie that I told you about?\n \n We wanted to take [the] metro downtown last night.\n \n She ate [an] apple this morning with her breakfast.\n \n Do you have [a] marker I can borrow?\n \n They are going to arrive in [an] hour.\n \n '
                ],
                hint: 'Drag and drop the correct article to fill in the blanks in each sentence:',
                type: 1,
                visualType: 1,
                options: ['a', 'an', 'the']
            },
            {
                title: 'SOME,\n A,\n AN,\n THE',
                options: ['some', 'a', 'an', 'the'],
                text: [
                    'I need [some] time to write my stories down.\n \n Did you bring [the] football we always use? Or did you bring [a] new one?\n \n He went to [the] store near his house to buy [some] bread.\n \n They downloaded [an] mp3 of this song.\n \n We brought [some] friends with us to the cafe.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct article to fill in the blanks in each sentence:'
            },
            {
                title: 'RULES\n FOR\n ARTICLES',
                text: [
                    'definite article - used with known, specific nouns',
                    'indefinite article - used with non-specific nouns'
                ],
                type: 2,
                visualType: 2,
                ans: ['the', 'a / an'],
                options: ['a / an', 'the'],
                hint: 'Drag and drop the articles to their appropriate descriptions:'
            }
        ],
        tags: ['New Songs', 'Articles', 'Indefinite Articles', 'Definite Articles']
    },
    {
        title: 'BEFORE\n- AND -\nAFTER',
        searchTitle: 'before and after',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Before and After.m4a'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'Before and After Instrumental.m4a'
            },
            {
                label: 'ACAPELLA',
                file: 'Before and After Acapella.m4a'
            }
        ],
        lyrics:
            "Let's talk before and after\n Before and after\n Let's talk before and after\n What came first, then what happened\n \n Let's talk before and after\n Before and after\n Let's talk before and after\n What came first, then what happened\n \n Before I go hang out, I have dinner at my house\n and after the night ends, I usually eat again\n That is what I normally do\n Before I sleep I sing a tune\n \n And after I sleep it starts again\n Before I have have breakfast I shower and dress\n But one day it was different\n After I showered the milk went missing\n \n I couldn’t find it anywhere \n I was late, oh dear!\n \n Let's talk before and after\n Before and after\n Let's talk before and after\n What came first, then what happened\n \n Let's talk before and after\n Before and after\n Let's talk before and after\n What came first, then what happened\n \n After I left the house that day\n I walked slowly in the rain\n Before I got to school\n I dropped my lunch, so not cool!\n \n After I walked into class\n I sat down at the back\n I saw my friend I said \"what’s up?\"\n She said she took an exam, \"man it was tough!\"\n \n Let's talk before and after\n Before and after\n Let's talk before and after\n What came first, then what happened\n \n Let's talk before and after\n Before and after\n Let's talk before and after\n What came first, then what happened\n \n",
        writtenWS: [
            {
                title: 'Daily\n Routines',
                text:
                    "I wake up at 7:30 in the morning. [After] I shower, I get dressed.\n \n [After] he gets home from work, he makes a sandwich and takes a nap.\n \n My friend always finishes his homework [before] dinner so he can hang out afterwards.\n \n I like to go for a run [before] work. It helps me start my day energized.\n \n She eats lunch [after] noon because she usually isn’t hungry until 1 o'clock.\n \n ",
                hint: 'Enter “before” or “after” to complete each sentence below:'
            },
            {
                title: 'Actions\n and\n Events',
                text:
                    "Last night, we went out [after] the show because we didn't feel like going to bed.\n \n Yesterday I finished all my work [before] 5 o’clock so I went home early!\n \n They arrived [before] the game started to see their favorite player walk into the stadium.\n \n They waited [after] the game was over to see their favorite player come out of the stadium.\n \n I don't have time right now - I’ll finish it [after] I’m done with my other work.",
                hint: 'Enter “before” or “after” to complete each sentence below:'
            }
        ],
        visualWS: [
            {
                title: 'Daily\n Routines',
                options: ['before', 'after'],
                text: [
                    'Every morning I say goodbye to my mother [before] I leave the house.\n \n They go to the cinema every Friday night [after] they finish their work.\n \n He likes waking up early, [before] everybody else, so he can spend some time reading by himself.\n \n She gets to school [before] 8:00 AM every day, to make sure she isn’t late for class.\n \n We play football on Sunday afternoons [after] we eat lunch, but [before] we have dinner.'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct time expression to fill in the blanks below:'
            },
            {
                title: 'Actions\n and\n Events',
                options: ['before', 'after'],
                text: [
                    "He wants to go to his aunt's house to say goodbye [before] he begins his travels.\n \n [After] I left the house that day, I walked slowly in the rain.\n \n Tomorrow afternoon, I will play football at the park with my friends [after] we get out of school.\n \n She met her husband for coffee [after] she finished her work last night.\n \n Let’s go to the supermarket [before] it's too late."
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct time expression to fill in the blanks below:'
            },
            {
                title: 'Order',
                options: ['before', 'after'],
                text: [
                    '1 comes before 2.\n \n 15 comes [before] 16.\n \n 11 comes [after] 8.\n \n 19 comes [after] 12.\n \n 15 comes [before] 16.\n \n 56 comes [after] 24.\n \n 13 comes [before] 15.\n \n 7 comes [before] 8.\n \n 8 comes [after] 7.\n \n 12 comes [after] 11.\n \n 11 comes [before] 12.'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct preposition to fill in the number sequences below:'
            }
        ],
        tags: ['New Songs', 'Time Expressions', 'Daily Routines', 'Actions', 'Events', 'Prepositions']
    },
    {
        title: 'Family',
        searchTitle: 'family',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Family.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'Family Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'Family Acapella.m4a'
            }
        ],
        lyrics:
            "I’ve got my mother, sister, father, brother, cousin\n All together\n I’ve got my aunt and uncle, grandma, grandpa\n Everyone together\n \n I’ve got my mother, sister, father, brother, cousin\n All together\n I’ve got my aunt and uncle, grandma, grandpa\n Everyone together\n \n My aunt is my father’s sister\n or my mother’s sister\n My uncle is my father's brother\n or my mother's brother\n \n My grandpa is my father’s father\n or my mother’s father\n My grandma is my father's mother\n or my mother's mother\n \n I’ve got my mother, sister, father, brother, cousin\n All together\n I’ve got my aunt and uncle, grandma, grandpa\n Everyone together\n \n I’ve got my mother, sister, father, brother, cousin\n All together\n I’ve got my aunt and uncle, grandma, grandpa\n Everyone together\n \n My cousin is my uncle's son\n or my uncle's daughter\n My cousin is my aunt's son\n or my aunt's daughter\n \n My brother is my father’s son,\n My sister is his daughter\n My brother is my mother’s son,\n My sister is her daughter\n \n I’ve got my mother, sister, father, brother, cousin\n All together\n I’ve got my aunt and uncle, grandma, grandpa\n Everyone together\n \n I’ve got my mother, sister, father, brother, cousin\n All together\n I’ve got my aunt and uncle, grandma, grandpa\n Everyone together\n \n My brother, sister, and me\n We are all siblings\n \n My brother, sister, and me\n We are all siblings\n \n My brother, sister, and me\n We are all siblings\n \n My brother, sister, and me\n We are all siblings\n \n My brother, sister, and me\n We are all siblings\n \n",
        flashcards: [
            ['my aunt', 'my father’s sister or my mother’s sister'],
            ['my uncle', 'my father’s brother or my mother’s brother'],
            ['my grandpa /\n my grandfather', 'my father’s father or my mother’s father'],
            ['my grandma /\n my grandmother', 'my father’s mother or my mother’s mother'],
            ['my cousin', 'my uncle’s son or daughter, or my aunt’s son or daughter'],
            ['my brother', 'my father’s son or my mother’s son'],
            ['my sister', 'my father’s daughter or my mother’s daughter'],
            ['my sibling', 'my brother or sister']
        ],
        writtenWS: [
            {
                title: 'My\n Family',
                text:
                    "Rebecca is my [sister]. Her mother is my mother.\n \n My father’s brother is my [uncle].\n \n My mother’s sister is my [aunt].\n \n My father’s daughter is my [sister].\n \n My grandpa’s daughter is either my [aunt,mother] or my [mother,aunt].\n \n My sister’s brother is my [brother].\n \n My uncle’s daughter is my [cousin].\n \n My cousin’s [father] is my uncle.\n \n My cousin’s sister is my [cousin].\n \n My sister is my father’s [daughter].\n \nI am my mother's [son,daughter].\n \n ",
                hint:
                    'Enter one of the following words to complete each sentence below:\n \n uncle / sister / cousin / daughter / aunt / mother / father'
            }
        ],
        visualWS: [
            {
                title: 'Family\n Members',
                options: ['cousin', 'sister', 'grandma', 'uncle', 'brother', 'aunt'],
                text: [
                    'My mother’s brother is my [uncle].\n \n I went to see my [cousin] today. She is my uncle’s daughter.\n \n My father’s mother, or my [grandma], lives in the countryside.\n \n My [brother] and my [sister] are my siblings.\n \n My [aunt] is my father’s sister.\n \n'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop each family member to fill in the blanks below:'
            }
        ],
        tags: ['New Songs', 'Vocabulary', 'Family', 'Family Members', 'Pronouns']
    },
    {
        title: 'Get In,\n Get Out',
        searchTitle: 'get in, get out',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Get In Get Out.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'Get In Get Out Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'Get in Get Out Acapella.m4a'
            }
        ],
        lyrics:
            "I get in\n I get out\n I get on\n I get off the bus\n \n I got in\n I got out\n I got on\n I got off the train\n \n I get in\n I get out\n I get on\n I get off the bus\n \n I got in\n I got out\n I got on\n I got off the train\n \n She gets in the car\n He gets in his seat\n They get on the road\n They drive on the street\n \n She gets on the highway\n They go full speed\n He gets out his phone\n And sends out a tweet\n \n They get off the highway\n They get on a road\n They park the car\n And out they go\n \n They get to the cinema\n They get out of the rain\n They get out their wallets\n And then they pay\n \n Then they find their seats\n In the 5th row\n She sits down\n While he gets popcorn\n \n Then the movie’s over\n They get out of their seats\n They get in their car\n To get something to eat\n \n They get out the car\n And go into the restaurant\n Split a bowl of soup\n And drink some lemon punch\n \n And then they are full so they leave\n They get into the car\n To go home and sleep\n \n He gets in\n He gets out\n He gets on\n He gets off the bus\n \n She gets in\n She gets out\n She gets on\n She gets off the bus\n \n He got in\n He got out\n He got on\n He got off the bus\n \n She got in\n She got out\n She got on\n She got off the bus\n \n Get on the car means I stand on top\n And my friends will say ”Hey man, get off!”\n \n Instead I say get in the car\n Get in the truck and then drive far\n \n But I get on the train, I get on the plane\n I get in my seat, buckle up always\n \n She gets out of town, she leaves this place\n She gets on her moto and drives away\n \n I get in the elevator AKA a lift\n I get off the elevator on floor 6\n \n And I get on the escalator go downstairs\n Get off on floor 3 once I am there\n \n If the elevator's broken take the stairs\n Go up, down, anywhere\n \n Take a seat means to get in the chair\n But get of out of your seats 'cuz the chorus is here\n \n We get in\n We get out\n We get on\n We get off the bus\n \n We got in\n We got out\n We got on\n We got off the bus\n \n We get in\n We get out\n We get on\n We get off the bus\n \n We got in\n We got out\n We got on\n And we got off the bus",
        writtenWS: [
            {
                title: 'Going\n Places',
                text:
                    'The taxi is coming. I [get in] the taxi.\n \n The bus is coming. I [get on] the bus.\n \n The train is waiting. I [get on] the train.\n \n I arrive in the taxi. I [get out] of the taxi.\n \n My bus reaches my stop. I [get off] the bus.\n \n The train gets to the station. I [get off] the train.\n \n To go down to the metro, I [get on] the escalator.\n \n To go up to my apartment, I [get in] the elevator.\n \n To pay for my groceries, I [get out] my wallet.\n \n After I finish my dinner at the restaurant, I [get up] from my chair and leave.\n \n When I get to the street, I [get in] my car and drive home.\n \n ',
                hint: 'Choose “get in,” “get on,” “get out,” “get off,” or “get up” to complete each sentence.'
            }
        ],
        visualWS: [
            {
                title: 'Get In, Out,\n On, Off',
                options: ['gets on', 'gets in', 'gets out', 'get in', 'get on', 'get off', 'get in'],
                text: [
                    'She [gets in] the car, he  [gets in] his seat,\n They [get on] the road, they drive on the street.\n\n She [gets out] of town, she leaves this place.\n She [gets on] her moto and drives away.\n\n  I [get in] the elevator, AKA a lift.\n I [get off] the elevator on floor six.\n\n  I [get on] the escalator, go downstairs.\n I [get off] on floor three once I am there.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct phrasal verb to fill in the blanks in each sentence:'
            }
        ],
        tags: ['New Songs', 'Verbs', 'Phrasal Verbs', 'Prepositions', 'Past Tense', 'Present Tense', 'New Songs']
    },
    {
        title: 'HOW MANY,\n HOW MUCH',
        searchTitle: 'how many, how much',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'How Many How Much.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'How Many How Much Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'How Many How Much Acapella.m4a'
            }
        ],
        lyrics:
            'How many, many, how much?\n How many things, how much stuff?\n How many, many, how much?\n How many things? That’s enough\n \n How many is countable\n How many apples are in the bag?\n How much asks about one thing\n How much sugar do I have?\n \n How many is countable\n How many books are in the bag?\n How much asks about one thing\n How much money is in your hand?\n \n How many is countable\n How many brothers do you have?\n How much asks about one thing\n How much money was the cab?\n \n How many is countable\n How many people are in the house?\n How much asks about one thing\n How much money was the couch?\n \n How many, many, how much?\n How many things, how much stuff?\n How many, many, how much?\n How many things, how much stuff?\n \n How many, many, how much?\n How many things, how much stuff?\n How many, many, how much?\n How many things? That’s enough\n \n How many bananas will you need\n To make some pudding for two or three?\n And how much sugar do I add?\n So the pudding does not taste bad?\n \n How many cups of flour do I need\n For pancakes for you and me?\n I need three cups of flour\n And they’ll be ready in an hour\n \n There are many people at the station\n How many people are waiting in line?\n Too many people for me\n I’ll be at a cafe eating key lime pie\n \n How many stops does the train make?\n None, the train is a direct line\n And how much does the train cost?\n A ticket costs $5.99\n \n How many, many, how much?\n How many things, how much stuff?\n How many, many, how much?\n How many things, how much stuff?\n \n How many, many, how much?\n How many things, how much stuff?\n How many, many, how much?\n How many things? That’s enough\n \n ',
        writtenWS: [
            {
                title: 'How Many?\n How Much?',
                text:
                    '[How much] time do we have before we need to leave?\n \n [How many] candles should we put on her birthday cake?\n \n [How much] olive oil is left in the bottle?\n \n [How many] books did you get at the library?\n \n [How many] people are coming to the party?\n \n [How much] pepper did you put in this soup?\n \n [How many] taxis passed before one stopped?\n \n [How many] students didn’t do their homework?\n \n [How much] rain does the state get in a year?\n \n [How much] money will I need to go to college?\n \n [How many] goals did you score in the game?\n \n ',
                hint: 'Enter “How many” or “How much” to complete each sentence:'
            }
        ],
        visualWS: [
            {
                title: 'Apples,\n Sugar,\n Books',
                options: ['apples', 'books', 'people', 'sugar', 'cars', 'money'],
                text: [
                    'How many [people] are on the train?\n \n How much [sugar] do you need for your recipe?\n \n How many [apples] did you pick from the tree?\n \n How much [money] did the ticket cost?\n \n How many [books] have you read this year?\n \n How many [cars]  are on the highway?\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct word to fill in the blanks in each sentence below:'
            },
            {
                title: 'How Many?\n How Much?',
                options: ['How many', 'How much'],
                text: [
                    '[How many] apples did you pick from the tree?\n \n [How much] money did the ticket cost?\n \n [How many] people are at the party?\n \n [How many] books are in your bag?\n \n [How much] flour do you need for your recipe?\n \n [How many] friends did you see at the park?\n \n [How much] does the soccer ball cost?\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop “How many” or “How much” to fill in the blanks in each sentence below:'
            }
        ],
        tags: ['New Songs', 'Verbs', 'Questions', 'Answers', 'Price', 'Money', 'Quantity']
    },
    {
        title: 'School\n Supplies',
        searchTitle: 'school supplies',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'School Supplies.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'School Supplies Insturmental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'School Supplies Acapella.m4a'
            }
        ],
        lyrics:
            "What is that?\n This, this is a ruler\n \n And what is this?\n That, that is an eraser\n \n What are these?\n Those are pencils I use to write notes\n \n What are those?\n These are crayons, my favorite color is gold\n \n I sit at my desk\n During the class\n I keep my books and pencils\n Inside my backpack\n \n A pencil has lead \n A pen has ink\n And I use both to draw amazing things\n \n Supplies, supplies, supplies at school \n Pencils and pens\n (Because we’ve got)\n Supplies, supplies, supplies in class\n Make art with my friends\n \n (You know we’ve got)\n Supplies, supplies, supplies at school \n Pencils and pens\n (Because we’ve got)\n Supplies, supplies, supplies in class\n Make art with my friends\n \n These are supplies \n That we use at school\n A notebook full of paper \n And a folder that is blue\n \n I paint with my paintbrush \n Gold is my still favorite color\n I use markers to draw a picture\n for my mother\n \n I use glue to stick stuff together \n To make cool things\n I keep my pencils in the pencil case\n It is green\n \n I use a sharpener \n When my pencils can't write\n And I use scissors to cut up paper \n To make something nice! \n \n Supplies, supplies, supplies at school \n Pencils and pens\n (Because we’ve got)\n Supplies, supplies, supplies in class\n Make art with my friends\n \n (You know we’ve got)\n Supplies, supplies, supplies at school \n Pencils and pens\n (Because we’ve got)\n Supplies, supplies, supplies in class\n Make art with my friends\n \n",
        flashcards: [
            ['ruler', 'a tool used to draw straight lines or measure objects'],
            ['eraser', 'a piece of rubber used to remove pencil marks from paper'],
            ['crayon', 'a stick of colored wax used for drawing'],
            ['pen', 'a tool used to write or draw with ink'],
            ['pencil', 'a tool used to write or draw with lead'],
            ['paintbrush', 'a tool used to apply paint onto a surface'],
            ['scissors', 'a tool used to cut paper'],
            ['notebook', 'a book of blank paper used for writing notes or making drawings'],
            ['marker', 'a soft, colorful pen used for drawing']
        ],
        writtenWS: [
            {
                title: 'Supplies',
                text:
                    'Keep all your papers in this [folder].\n \n I made a mistake on my shopping list; I need an [eraser].\n \n Your map should be in color; take out your [markers,crayons].\n \n Write your name in dark black with the [pencil,pen].\n \n Cut along the line with your [scissors].\n \n Take another pencil out of your [pencil case].\n \n You can stick that picture in your notebook with [glue].\n \n You can write down the assignment in your [notebook].\n \n I need to draw a straight line; I need a [ruler].\n \n You can do the first draft in pencil, but the final draft must be in [pen].\n \n I haven’t seen your homework; is it in your [backpack,folder]?\n \n My pencil broke. Does anyone have a [sharpener]?\n \n You can use my paints, but you’ll need a [paintbrush].\n \n',
                hint:
                    'Pick a word that completes each sentence correctly:\n \n ruler / eraser / pencil / crayons / backpack / pen / notebook / folder / paintbrush / glue / sharpener / scissors / pencil case / markers'
            }
        ],
        visualWS: [
            {
                title: 'Using\nSupplies',
                options: ['paintbrush', 'scissors', 'pencil', 'pen', 'notebook', 'ruler'],
                text: [
                    'These are [scissors]. You can use them to cut paper.\nI sharpened my [pencil], and then used it to write notes in my notebook.\nHe used a [paintbrush] to paint a picture.\nThis is the [notebook] I use to take notes during class.\nI will use the [ruler] to measure the size of the table.\nMy [pen] is almost out of ink.'
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct word to fill in the blanks in each sentence below:'
            },
            {
                title: 'MAKE,\nWRITE,\nDRAW',
                text: [
                    'I [make] art with my friends.\nI use markers to [draw] a picture for my mother.\nI [write] notes with my pencil during class.\nHe wants to [write] a book about his family.\nShe will [make] art at school today.\nThey like to [draw] pictures of their city.'
                ],
                hint: 'Drag and drop the correct verb to fill in the blanks in each sentence below:',
                type: 1,
                visualType: 1,
                options: ['make', 'write', 'draw']
            }
        ],
        tags: [
            'New Songs',
            'Vocabulary',
            'Verbs',
            'School Vocabulary',
            'School Supplies',
            'School',
            'Opinion',
            'This/That'
        ]
    },
    {
        title: '1-20',
        searchTitle: '1-20',
        music: [
            {
                label: 'STUDIO VERSION',
                file: '1-20.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: '1-20 Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: '1-20 Acapella.m4a'
            }
        ],
        lyrics:
            '1, 2, 3, 4, 5, 6, 7\n 8, 9, 10, after 10 comes 11\n 12, 13, 14, 15, 16, count with me\n 17, 18, 19, and 20\n \n One, two, three, four, five, six, seven\n Eight, nine, ten, after ten comes eleven\n Twelve, thirteen, fourteen, fifteen, sixteen, count with me\n Seventeen, eighteen, nineteen, and twenty\n \n 1, 2, 3, 4, 5, 6, 7\n 8, 9, 10, after 10 comes 11\n 12, 13, 14, 15, 16, count with me\n 17, 18, 19, and 20\n \n One, two, three, four, five, six, seven\n Eight, nine, ten, after ten comes eleven\n Twelve, thirteen, fourteen, fifteen, sixteen, count with me\n Seventeen, eighteen, nineteen, and twenty\n \n ',
        flashcards: [
            ['1', 'one'],
            ['2', 'two'],
            ['3', 'three'],
            ['4', 'four'],
            ['5', 'five'],
            ['6', 'six'],
            ['7', 'seven'],
            ['8', 'eight'],
            ['9', 'nine'],
            ['10', 'ten'],
            ['11', 'eleven'],
            ['12', 'twelve'],
            ['13', 'thirteen'],
            ['14', 'fourteen'],
            ['15', 'fifteen'],
            ['16', 'sixteen'],
            ['17', 'seventeen'],
            ['18', 'eighteen'],
            ['19', 'nineteen'],
            ['20', 'twenty']
        ],
        visualWS: [
            {
                title: 'Count\n 1-10',
                options: ['five', 'three', 'nine', 'eight'],
                text: ['one\n two\n [three]\n four\n [five]\n six\n seven\n [eight]\n [nine]\n ten\n '],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop each number to fill in the blanks in the sequence below:'
            },
            {
                title: 'Count\n 11-20',
                options: ['twenty', 'twelve', 'eighteen', 'fifteen'],
                text: [
                    'eleven\n [twelve]\n thirteen\n fourteen\n [fifteen]\n sixteen\n seventeen\n [eighteen]\n nineteen\n [twenty]\n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop each number to fill in the blanks in the sequence below:'
            }
        ],
        tags: ['New Songs', 'Numbers', 'Counting', 'Vocabulary']
    },
    {
        title: '20-60',
        searchTitle: '20-60',
        music: [
            {
                label: 'STUDIO VERSION',
                file: '20-60.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: '20-60 Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: '20-60 Acapella.m4a'
            }
        ],
        lyrics:
            '20, 21, 22, 23, 24, me and you\n 25, 26, 27, 28, 29, and 30\n 31, 32, 33, 34, 35, you and me\n 36, 37, 38, 39, and 40\n 41, 42, 43, 44, count with me\n 45, 46, 47, 48, 49, and 50\n 51, 52, 53, 54, 55, count with me\n 56, 57, 58 ,59, and 60\n \n It’s the number song\n Number, number song\n It’s the number song\n Let’s count together\n \n It’s the number song\n Number, number song\n It’s the number song\n Let’s count together\n \n 20-60, 20-60\n 20-60, 20-60\n \n Twenty to sixty, twenty to sixty\n Twenty to sixty, twenty to sixty\n \n Twenty, twenty-one, twenty-two, twenty-three, twenty-four, me and you\n Twenty-five, twenty-six, twenty-seven, twenty-eight, twenty-nine, and thirty\n Thirty-one, thirty-two, thirty-three, thirty-four, thirty-five, you and me\n Thirty-six, thirty-seven, thirty-eight, thirty-nine, and forty\n Forty-one, forty-two, forty-three, forty-four, count with me\n Forty-five, forty-six, forty-seven, forty-eight, forty-nine, and fifty\n Fifty-one, fifty-two, fifty-three, fifty-four, fifty-five, count with me\n Fifty-six, fifty-seven, fifty-eight, fifty-nine, and sixty\n \n Twenty to sixty, twenty to sixty\n Twenty to sixty, twenty to sixty\n Twenty to sixty, twenty to sixty\n Twenty to sixty, twenty to sixty\n \n ',
        flashcards: [
            ['20', 'twenty'],
            ['21', 'twenty-one'],
            ['22', 'twenty-two'],
            ['23', 'twenty-three'],
            ['24', 'twenty-four'],
            ['25', 'twenty-five'],
            ['26', 'twenty-six'],
            ['27', 'twenty-seven'],
            ['28', 'twenty-eight'],
            ['29', 'twenty-nine'],
            ['30', 'thirty'],
            ['31', 'thirty-one'],
            ['32', 'thirty-two'],
            ['33', 'thirty-three'],
            ['34', 'thirty-four'],
            ['35', 'thirty-five'],
            ['36', 'thirty-six'],
            ['37', 'thirty-seven'],
            ['38', 'thirty-eight'],
            ['39', 'thirty-nine'],
            ['40', 'forty'],
            ['41', 'forty-one'],
            ['42', 'forty-two'],
            ['43', 'forty-three'],
            ['44', 'forty-four'],
            ['45', 'forty-five'],
            ['46', 'forty-six'],
            ['47', 'forty-seven'],
            ['48', 'forty-eight'],
            ['49', 'forty-nine'],
            ['50', 'fifty'],
            ['51', 'fifty-one'],
            ['52', 'fifty-two'],
            ['53', 'fifty-three'],
            ['54', 'fifty-four'],
            ['55', 'fifty-five'],
            ['56', 'fifty-six'],
            ['57', 'fifty-seven'],
            ['58', 'fifty-eight'],
            ['59', 'fifty-nine'],
            ['60', 'sixty']
        ],
        visualWS: [
            {
                title: 'Count\n 20-30',
                options: ['thirty', 'twenty-four', 'twenty', 'twenty-eight'],
                text: [
                    '[twenty],\n twenty-one\n twenty-two\n twenty-three\n [twenty-four]\n twenty-five\n twenty-six\n twenty-seven\n [twenty-eight]\n twenty-nine\n [thirty]\n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop each number to fill in the blanks in the sequence below:'
            },
            {
                title: 'Count\n 31-40',
                options: ['thirty-nine', 'thirty-two', 'forty', 'thirty-six'],
                text: [
                    'thirty-one\n [thirty-two]\n thirty-three\n thirty-four\n thirty-five\n [thirty-six]\n thirty-seven\n thirty-eight\n [thirty-nine]\n [forty]\n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop each number to fill in the blanks in the sequence below:'
            },
            {
                title: 'Count\n 41-50',
                options: ['forty-eight', 'fifty', 'forty-six', 'forty-four'],
                text: [
                    'forty-one\n forty-two\n forty-three\n [forty-four]\n forty-five\n [forty-six]\n forty-seven\n [forty-eight]\n forty-nine\n [fifty]\n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop each number to fill in the blanks in the sequence below:'
            },
            {
                title: 'Count\n 51-60',
                options: ['sixty', 'fifty-nine', 'fifty-five', 'fifty-three'],
                text: [
                    'fifty-one\n fifty-two\n [fifty-three]\n fifty-four\n [fifty-five]\n fifty-six\n fifty-seven\n fifty-eight\n [fifty-nine]\n [sixty]\n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop each number to fill in the blanks in the sequence below:'
            }
        ],
        tags: ['New Songs', 'Numbers', 'Counting', 'Vocabulary']
    },
    {
        title: 'DURING,\n WHILE,\n FOR',
        searchTitle: 'during, while, for',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'During While For.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'During While For Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'During While For Acapella.m4a'
            }
        ],
        lyrics:
            "During, while, for\n During, while, for\n During, while, for\n During, while, for\n \n During, while, for\n During, while, for\n During, while, for\n During, while, for\n \n During the morning I got to work\n Right around 9:45\n At 12 o’clock I got hungry\n So I had lunch outside\n \n I had lunch for an hour\n While I sat at a table\n While I ate I saw a bee\n I think it liked my kale\n \n Back at the office I worked for 3 hours\n During the afternoon\n While I worked I got tired\n but I could not snooze!\n \n During the evening I drove home\n for 30 minutes in traffic\n While I was driving I sang a song\n And my friend was laughing\n \n (I said)\n During, while, for\n During, while, for\n During, while, for\n During, while, for\n \n During, while, for\n During, while, for\n During, while, for\n During, while, for\n \n “For” plus “period of time”\n That’s how long something happened\n \n I've worked here for three weeks\n For a year I lived in Aspen\n \n “While” plus “verb,” “while” plus “verb,”\n “While” plus “verb”\n While I sat down I heard the birds\n “‘While’ plus ‘verb’” is what they chirped\n \n While I was getting up this morning,\n I could hear you loudly snoring\n And while I wrote this song,\n I missed a call from my mom\n \n “During” plus “noun” to say\n when an event has occurred\n \n During my class I made a new friend\n And this is what I said to her\n \n (I said)\n During, while, for\n During, while, for\n During, while, for\n During, while, for\n \n During, while, for\n During, while, for\n During, while, for\n During, while, for\n \n ",
        flashcards: [
            ['traffic', 'a lot of cars and other vehicles moving on a street, road, or highway'],
            ['kale', 'a leafy, green vegetable that looks similar to lettuce and cabbage'],
            [
                'bee',
                'a flying, yellow and black insect that collects pollen and nectar from plants, and makes wax and honey'
            ],
            ['to snooze', 'to sleep lightly'],
            ['Aspen', 'a city in Colorado, USA'],
            ['to snore', 'to make a loud breathing noise during sleep'],
            ['to occur', 'to happen'],
            ['to chirp', 'to make a short, high-pitched sound']
        ],
        writtenWS: [
            {
                title: 'DURING,\n WHILE,\n FOR',
                text:
                    '[While] I waited for my rice to cook, I had a cup of tea.\n \n He fell asleep [during] the movie.\n \n I will work on my new novel [for] an hour or two.\n \n A bee flew through the window [during] English class, scaring all the kids.\n \n I took a snooze [while] you were giving your speech.\n \n I’ve been waiting for you [for] almost an hour!\n \n You have to let the sauce cook [for] another twenty minutes.\n \n I can’t concentrate [while] you’re making all that noise.\n \n It always seems to rain [during] our vacation.\n \n I’ll feed your cat [while] you’re out of town.\n \n My parents have been married [for] twenty-five years.\n \n Turn your cell phone off [during] the performance.\n \n Let’s finish painting the house [while] it’s still sunny.\n \n We’ve lived in this apartment [for] six months now.\n \n ',
                hint: 'Use “during,” “while,” or “for” to complete each sentence correctly:'
            }
        ],
        visualWS: [
            {
                title: 'EVENTS\n AND\n TIME 1',
                text: [
                    '[During] the morning, I got to work.\n \n I played soccer at the park [for] three hours.\n \n [While] I was eating lunch, my sister called.\n \n [For] two years, I worked at the hardware store.\n \n The weather was very hot and humid [during] the summer.\n \n She wrote me a letter [while] she was in Switzerland.\n \n '
                ],
                hint: 'Drag and drop the correct preposition to fill in the blanks in each sentence:',
                type: 1,
                visualType: 1,
                options: ['during', 'while', 'for']
            },
            {
                title: 'EVENTS\n AND\n TIME 2',
                options: ['morning', 'two years', 'he was', 'I was', 'three hours', 'the evening'],
                text: [
                    'For [two years], I lived in Spain.\n \n While [he was] at school, his mother went to the supermarket.\n \n They went to the cinema during [the evening].\n \n I sang my favorite song while [I was] driving my car.\n \n She listened to music for [three hours].\n \n During the [morning], I ate breakfast with my uncle.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct expression to fill in the blanks in each sentence below:'
            }
        ],
        tags: [
            'New Songs',
            'Prepositions',
            'Vocabulary',
            'Prepositions of Time',
            "Time Expressions' Time",
            'Routine',
            'Daily Routine',
            'Activities'
        ]
    },
    {
        title: 'I Am,\n You Are,\n We Are',
        searchTitle: 'i am, you are, we are',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'I Am You Are We Are.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'I Am You Are We Are Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'I Am You Are We Are Acapella.m4a'
            }
        ],
        lyrics:
            'Present simple\n I am\n You are\n He is\n She is\n It is\n You are\n They are\n We are everything\n \n Present continuous\n I am being\n You are being\n He is being\n She is being\n It is being\n You are being\n They are being\n We are being us\n \n Simple past\n I was\n You were\n He was\n She was\n It was\n You were\n They were\n We were everything\n \n Present perfect\n I have been\n You have been\n He has been\n She has been\n It has been\n You have been\n They have been\n We have been everything\n \n Let’s take it back to the present simple\n I am\n You are\n He is\n She is\n It is\n You are\n They are\n We are everything\n \n Present continuous\n I am being\n You are being\n He is being\n She is being\n It is being\n You are being\n They are being\n We are being us\n \n Simple past\n I was\n You were\n He was\n She was\n It was\n You were\n They were\n We were everything\n \n Present perfect\n I have been\n You have been\n He has been\n She has been\n It has been\n You have been\n They have been\n We have been everything\n \n ',
        visualWS: [
            {
                title: 'To Be',
                options: ['I', 'You', 'he', 'We'],
                text: [
                    '[We] are happy together.\n \n [I] am an artist. I like to draw, paint, and make sculptures.\n \n I just learned that [he] is from my hometown.\n \n [You] are an interesting and inspiring person.\n \n [I] am 26 years old.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct pronoun to fill in the blanks in each sentence below:'
            },
            {
                title: 'I Am',
                options: ['am', 'was', 'am being', 'have been'],
                text: [
                    'I [was] tired last night, so I went to sleep early.\n \n Every year, I [am] excited to see my family for the holidays.\n \n I [have been] in this city for 4 years already.\n \n I [am being] smart with this science project - I am taking my time to complete every step before moving forward to the next one.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'You Are',
                options: ['were', 'have been', 'are being', 'are'],
                text: [
                    'You [are] one of the most talented musicians I know.\n \n I think you [were] out of town last week, so you weren’t able to come to the meeting.\n \n You [have been] very helpful for my students so far this year.\n \n You [are being] patient with this difficult project, and I appreciate that.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'He/She/It\n Is',
                options: ['is being', 'is', 'was', 'has been'],
                text: [
                    'My sister lives far away. It [has been] 10 years since I last saw her.\n \n He [is] on a football team, and they have a game this Sunday. Let’s go!\n \n She [is being] nice to everybody today.\n \n It [was] a great show. He performed all of my favorite songs.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'We Are',
                options: ['have been', 'were', 'are being', 'are'],
                text: [
                    'We [are being] patient, even though this game is taking a long time.\n \n Did she tell you that we [have been] to this restaurant before?\n \n We [are] family.\n \n Last week, we [were] really tired from our travels.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'They Are',
                options: ['are', 'are being', 'were', 'have been'],
                text: [
                    'They [have been] friends for 15 years, so they understand each other very well.\n \n They [are] my best customers; they come to my store every week.\n \n Do you know why they [are being] difficult to deal with today?\n \n Those students [were] happy to see you yesterday.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            }
        ],
        tags: ['New Songs', 'Verbs', 'To Be', 'Verb Conjugation', 'Past Tense', 'Present Tense']
    },
    {
        title: 'WORK AT THE OFFICE',
        searchTitle: 'work at the office',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Work at the Office.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'Work at the Office Instrumental.m4a'
            },
            {
                label: 'ACAPELLA',
                file: 'Work at the Office Acapella.m4a'
            }
        ],
        lyrics:
            'We meet in the conference room for meetings\n Say “bye” to the receptionist when leaving\n \n I scan documents using a scanner\n I plan meetings and I write them in my planner\n \n I have a meeting with my colleagues\n A presentation on marketing\n \n Our charts show where the sales are high\n I put old documents in the shredder - goodbye!\n \n If I am tired I use the coffee machine\n I make calls to offices overseas\n \n I write reports on the newest products\n And I brainstorm new ways to make profit\n \n I talk to the boss about performance review\n I read documents to know what is new\n \n I save files on my USB drive\n On my laptop at my desk on floor five\n \n All day we work at the office\n We take breaks, then we drink coffee\n All afternoon we talk about the market\n We have meetings, we make profit\n \n All day we work at the office\n We take breaks, then we drink coffee\n All afternoon we talk about the market\n We have meetings, we make profit\n \n Cubicles and offices, some have doors\n I keep a stapler in the drawers\n \n I write a memo to give directions\n I check my voicemail for any messages\n \n I have a client meeting over lunch\n I put my notes in a folder when done\n \n Once I’m done taking notes, I say thanks!\n And we end the meeting with a handshake\n \n I head back to the office go through the doors\n I take the elevator up to my floor\n \n I keep my desk tidy and organized\n On my calendar is a vacation in July!\n \n Quarterly results are important\n We write our goals on clipboards with pens\n \n I interview new candidates with the boss\n You are hired! You got the job\n \n All day we work at the office\n We take breaks, then we drink coffee\n All afternoon we talk about the market\n We have meetings, we make profit\n \n All day we work at the office\n We take breaks, then we drink coffee\n All afternoon we talk about the market\n We have meetings, we make profit\n \n ',
        lyricsPlayer: {
            lyrics: [
                { line: '', time: -1 },
                { line: 'We meet in the conference room for meetings', time: 11000 },
                { line: 'Say bye to the receptionist when leaving', time: 14000 },
                { line: 'I scan documents using a scanner', time: 16500 },
                { line: 'I plan meetings and I write them in my planner', time: 20500 },
                { line: 'I have a meeting with my colleagues', time: 23000 },
                { line: 'A presentation on marketing', time: 26000 },
                { line: 'Our charts show where the sales are high', time: 28000 },
                { line: 'I put old documents in the shredder - goodbye!', time: 31000 },
                { line: 'If I am tired I use the coffee machine', time: 34000 },
                { line: 'I make calls to offices overseas', time: 37000 },
                { line: 'I write reports on the newest products', time: 40000 },
                { line: 'And I brainstorm new ways to make profit', time: 43000 },
                { line: 'I talk to the boss about performance review', time: 46000 },
                { line: 'I read documents to know what is new', time: 49000 },
                { line: 'I save files on my USB drive', time: 52000 },
                { line: 'On my laptop at my desk on floor five', time: 54000 },
                { line: 'All day we work at the office', time: 58000 },
                { line: 'We take breaks, then we drink coffee', time: 61000 },
                { line: 'All afternoon we talk about the market', time: 64000 },
                { line: 'We have meetings, we make profit', time: 66000 },
                { line: 'All day we work at the office', time: 69000 },
                { line: 'We take breaks, then we drink coffee', time: 72000 },
                { line: 'All afternoon we talk about the market', time: 75000 },
                { line: 'We have meetings, we make profit', time: 78000 },
                { line: 'Cubicles and offices, some have doors', time: 82000 },
                { line: 'I keep a stapler in the drawers', time: 85000 },
                { line: 'I write a memo to give directions', time: 87500 },
                { line: 'I check my voicemail for any messages', time: 90000 },
                { line: 'I have a client meeting over lunch', time: 93000 },
                { line: 'I put my notes in a folder when done', time: 96000 },
                { line: "Once I'm done taking notes, I say thanks!", time: 100000 },
                { line: 'And we end the meeting with a handshake', time: 101500 },
                { line: ' I head back to the office go through the doors', time: 104800 },
                { line: ' I take the elevator up to my floor', time: 108000 },
                { line: 'I keep my desk tidy and organized', time: 110000 },
                { line: 'On my calendar is a vacation in July!', time: convertTimeToMS('1:54') },
                { line: 'Quarterly results are important', time: convertTimeToMS('1:57') },
                { line: 'We write our goals on clipboards with pens', time: convertTimeToMS('1:59') },
                { line: 'I interview new candidates with the boss', time: convertTimeToMS('2:02') },
                { line: 'You are hired! You got the job', time: convertTimeToMS('2:05') },
                { line: 'All day we work at the office', time: convertTimeToMS('2:08') },
                { line: 'We take breaks, then we drink coffee', time: convertTimeToMS('2:11') },
                { line: 'All afternoon we talk about the market', time: convertTimeToMS('2:14') },
                { line: 'We have meetings, we make profit', time: convertTimeToMS('2:17') },
                { line: 'All day we work at the office', time: convertTimeToMS('2:19') },
                { line: 'We take breaks, then we drink coffee', time: convertTimeToMS('2:23') },
                { line: 'All afternoon we talk about the market', time: convertTimeToMS('2:25') },
                { line: 'We have meetings, we make profit', time: convertTimeToMS('2:29') },
                { line: '', time: convertTimeToMS('2:32') }
            ]
        },
        flashcards: [
            ['to brainstorm', 'to come up with ideas'],
            ['colleague', 'a person you work with'],
            ['shredder', 'a machine used to tear up documents'],
            ['presentation', 'an official meeting that involves showing and explaining ideas to others'],
            ['marketing', 'the action of advertising and promoting products'],
            ['to take a break', 'to rest for a short period of time'],
            ['boss', 'the person who leads a company'],
            ['cubicles', 'small, cube-shaped offices inside a large office space, with short walls separating them'],
            ['office', 'a building where people work'],
            ['desk', 'a raised, flat surface where people do work'],
            ['tidy', 'neat'],
            ['organized', 'arranged in an orderly way'],
            ['to be hired', 'to get a job'],
            ['clipboard', 'a small wooden or plastic board that is used to hold papers'],
            ['market', 'the group of consumers and producers of a certain product']
        ],
        writtenWS: [
            {
                title: 'My Day\n At Work',
                text:
                    'I walked through the door in the morning and said hello to the [receptionist]. I rode the elevator up to the fifth [floor]. I looked at my [planner] to see my schedule for the day. At 9:00 I had a [meeting] in the [conference room]. We talked about the [market]. Sales look good so our [profits] are high.\n \n After the meeting, we took a [break]. I had a cup of [coffee]. I went back to my [desk] and turned on my [laptop]. I printed out some files that were on my [USB drive]. I checked my voicemail for any [messages]. My wife had called. She said that we needed more money and that I should ask my [boss] for a raise. But my boss said my [performance] was not good enough.\n \n I had another cup of [coffee], said good-bye to the [receptionist], and walked out the door.\n \n ',
                hint:
                    'Use one of the following words to fill in each blank in the following story:\n \n coffee / messages / desk / break / conference room / planner / receptionist / performance / boss / USB drive / laptop / profits / market / meeting / floor\n \n'
            }
        ],
        visualWS: [
            {
                title: 'Office\nActions',
                options: ['make', 'send', 'read', 'take', 'keep', 'have'],
                text: [
                    'We [take] breaks in the afternoon for coffee.\n \n I [have] a meeting with my colleagues about marketing.\n \n Can you [read] my report and let me know what you think?\n \n I need to [make] a call to our office in France.\n \n I put my all my supplies away because I like to [keep] my desk organized.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb to fill in the blanks in each sentence below:'
            },
            {
                title: 'IN, TO,\n AT, ON',
                text: [
                    'We meet [in] the conference room for meetings.\n \n I make calls [to] offices overseas.\n \n I type reports [on] the newest products.\n \n All day we work [at] the office.\n \n I put my notes [in] a folder when I’m done.\n \n I go [to] work in the morning.\n \n Please leave the files [on] top of my desk.\n \n '
                ],
                hint: 'Drag and drop the correct preposition to fill in the blanks in each sentence below:',
                type: 1,
                visualType: 2,
                options: ['in', 'to', 'at', 'on']
            }
        ],
        tags: [
            'New Songs',
            'Vocabulary',
            'Office Vocabulary',
            'Office',
            'Work',
            'Working',
            'Business English',
            'Business'
        ]
    },
    {
        title: 'I Go, You Go, We Go',
        searchTitle: 'i go, you go, we go',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'I Go You Go We Go.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'I Go You Go Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'I Go You Go We Go Acapella.m4a'
            }
        ],
        lyrics:
            'Present simple\n I go\n You go\n He goes\n She goes\n It goes\n You go\n They go\n We go together\n \n Present continuous\n I am going\n You are going\n He is going\n She is going\n It is going\n You are going\n They are going\n We are going together\n \n Simple past\n I went\n You went\n He went\n She went\n It went\n You went\n They went\n We went together\n \n Present perfect\n I have gone\n You have gone\n He has gone\n She has gone\n It has gone\n You have gone\n They have gone\n We have gone everywhere!\n \n Take it back to the present simple\n I go\n You go\n He goes\n She goes\n It goes\n You go\n They go\n We go together\n \n Present continuous\n I am going\n You are going\n He is going\n She is going\n It is going\n You are going\n They are going\n We are going together\n \n Simple past\n I went\n You went\n He went\n She went\n It went\n You went\n They went\n We went together\n \n Present perfect\n I have gone\n You have gone\n He has gone\n She has gone\n It has gone\n You have gone\n They have gone\n And we have gone everywhere!\n \n ',
        lyricsPlayer: {
            lyrics: [
                { line: '', time: -1 },
                { line: 'Present simple', note: 'Verse 1', time: 4000 },
                { line: 'I go you go he goes', time: 5900 },
                { line: 'she goes it goes you go', time: 8800 },
                { line: 'they go and we go together', time: 11800 },
                { line: '', time: 16300 },
                { line: 'present continuous', time: 16500 },
                { line: 'I am going you are going', time: 18000 },
                { line: 'he is going', time: 20000 },
                { line: 'she is going it is going', time: 21000 },
                { line: 'you are going', time: 23000 },
                { line: 'they are going', time: 24000 },
                { line: 'we are going together', time: 25900 },
                { line: '', time: 27800 },
                { line: 'simple past', time: 29000 },
                { line: 'I went you went', time: 30500 },
                { line: 'he went she went it went', time: 32000 },
                { line: 'you went', time: 35000 },
                { line: 'they went', time: 35800 },
                { line: 'and we went together', time: 38500 },
                { line: '', time: 41000 },
                { line: 'present perfect', time: 41500 },
                { line: 'I have gone', time: 43000 },
                { line: 'You have gone', time: 44000 },
                { line: 'He has gone', time: 45000 },
                { line: 'She has gone', time: 46000 },
                { line: 'It has gone', time: 46800 },
                { line: 'You have gone', time: 48000 },
                { line: 'They have gone', time: 49000 },
                { line: 'and we have gone', time: 51000 },
                { line: 'everywhere', time: 52000 },
                { line: 'Take it back', time: 52500 },
                { line: 'to the present simple', time: 53500 },
                { line: 'I go you go he goes', time: 55000 },
                { line: 'she goes it goes you go', time: 58000 },
                { line: 'they go and we go together', time: 59000 }
                // { line: '', time: 58000 },
                // { line: 'present continuous', time: 59000 },
                // { line: 'I am going you are going', time: 60000 },
                // { line: 'he is going', time: 61000 },
                // { line: 'she is going it is going', time: 62000 },
                // { line: 'you are going', time: 63000 },
                // { line: 'they are going', time: 64000 },
                // { line: 'we are going together', time: 65000 },
                // { line: '', time: 66000 },
                // { line: 'simple past', time: 67000 },
                // { line: 'I went you went', time: 68000 },
                // { line: 'he went she went it went', time: 69000 },
                // { line: 'you went', time: 70000 },
                // { line: 'they went', time: 71000 },
                // { line: 'and we went together', time: 72000 },
                // { line: '', time: 73000 },
                // { line: 'present perfect', time: 74000 },
                // { line: 'I have gone', time: 75000 },
                // { line: 'You have gone', time: 76000 },
                // { line: 'He has gone', time: 77000 },
                // { line: 'She has gone', time: 78000 },
                // { line: 'It has gone', time: 79000 },
                // { line: 'You have gone', time: 80000 },
                // { line: 'They have gone', time: 81000 },
                // { line: 'and we have gone', time: 82000 },
                // { line: 'everywhere', time: 83000 },
                // { line: 'Take it back', time: 84000 },
                // { line: 'to the present simple', time: 85000 }
            ]
        },
        visualWS: [
            {
                title: 'To Go',
                options: ['She', 'I', 'He', 'We'],
                text: [
                    '[She] goes to the park with her family.\n \n [We] went to the store to buy flowers for our grandmother.\n \n [I] go by myself to my friend’s house after school.\n \n [He] goes to his favorite restaurant once a month.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct pronoun to fill in the blanks in each sentence below:'
            },
            {
                title: 'I Go',
                options: ['went', 'go', 'have gone', 'am going'],
                text: [
                    'I [am going] to school now. I will go to the park this afternoon.\n \n Yesterday, I [went] to my cousin’s house to eat dinner.\n \n Once a week at 5:00pm, I [go] to Maria’s house with all my friends.\n \n I [have gone] to the supermarket with my father twice so far this week.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'You Go',
                options: ['go', 'are going', 'went', 'have gone'],
                text: [
                    'You [went] home before they finished the show, so you missed your favorite song!\n \n You [are going] to the same school as I am next year.\n \n Every day, you [go] to work early.\n \n You [have gone] to a lot of different cafes recently.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'He/She/It\n Goes',
                options: ['goes', 'is going', 'went', 'has gone'],
                text: [
                    'He [went] to the football game with his uncle yesterday.\n \n Once a week at 5:00pm, she [goes] to Maria’s house with all her friends.\n \n Now that the sun is out, he [is going] to the lake to go swimming.\n \n She [has gone] to visit her grandparents, and she will be back in a few days.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'We Go',
                options: ['go', 'have gone', 'are going', 'went'],
                text: [
                    'We [have gone] to the city center to see my brother play music every weekend this year.\n \n We [are going] to the cafe later today.\n \n Last summer, we [went] to the beach every weekend.\n \n Once a week at 5:00pm, we [go] to Maria’s house with all our friends.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            },
            {
                title: 'They Go',
                options: ['are going', 'went', 'go', 'have gone'],
                text: [
                    'They [went] to the cinema earlier, and they will meet us afterwards for dinner.\n \n Once a week at 5:00pm, they [go] to Maria’s house with all their friends.\n \n They [have gone] to the supermarket. We can wait for them here at home.\n \n They [are going] home later today to make music together.\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the correct verb form to fill in the blanks in each sentence below:'
            }
        ],
        tags: ['New Songs', 'Verbs', 'To Go', 'Verb Conjugation', 'Past Tense', 'Present Tense']
    },
    {
        title: 'TIME',
        searchTitle: 'time',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Time.mp3'
            },
            {
                label: 'INSTRUMENTAL',
                file: 'Time Instrumental.mp3'
            },
            {
                label: 'ACAPELLA',
                file: 'Time Acapella.m4a'
            }
        ],
        lyrics:
            "Time, let's talk about time\n Tell me, what time does it start?\n The party starts at 2:45\n Let's all meet at the park\n \n Time, let's talk about time\n Tell me, what time does it start?\n The party starts at 2:45\n Let’s all meet at the park\n \n The day of the party I woke up at 6:45 in the morning\n Outside it was still dark I could hear my sister snoring\n \n At half past seven I went for a run, for half an hour\n At 8:35 I was back at home, and then I had a shower\n \n And I knew the party was later that day\n I rushed to the store, didn’t want to be late!\n \n Got on my bike, rode for twenty minutes\n Got the cake and then left the business\n \n And then I rode home in the sunshine\n The date of the party was the 11th of July \n The day was Saturday, party time!\n And the year was 2009\n \n Time, let's talk about time\n Tell me, what time does it start?\n The party starts at 2:45\n Let’s all meet at the park\n \n Time, let's talk about time\n Tell me, what time does it start?\n The party starts at 2:45\n Let’s all meet at the park\n \n I arrived at the party right on time\n At 2:45 on the dot\n \n We danced for a while, I showed my moves\n I did the “funky chicken” for an hour or two\n \n Then we had cake, the cake that I brought\n Chocolate, strawberries on top\n \n And the party ended at eight o’clock\n Then I walked home for six blocks\n \n I got back home at 8:14\n Man, my sister was still snoring!\n \n She missed out, the party was great\n From 2:45 'til it ended at eight\n \n That's the story, say “at” for the hour\n And we also we say “at night”\n But it's “in the morning,” “in the afternoon,”\n “in the month,” “on the day,” alright?\n \n Time, let's talk about time\n Tell me, what time does it start?\n The party starts at 2:45\n Let’s all meet at the park\n \n Time, let's talk about time\n Tell me, what time does it start?\n The party starts at 2:45\n Let’s all meet at the park\n \n ",
        flashcards: [
            ['half past seven', '7:30'],
            ['half past nine', '9:30'],
            ['quarter to three', '2:45'],
            ['quarter to seven', '6:45'],
            ['quarter past eight', '8:15'],
            ['quarter past nine', '9:15'],
            ['eight o’clock', '8:00'],
            ['three o’clock', '3:00']
        ],
        writtenWS: [
            {
                title: 'Time\n in\n Numbers',
                text:
                    'half past six = [6:30]\n \n quarter to three = [2:45]\n \n twenty to nine = [8:40]\n \n quarter to eight = [7:45]\n \n ten to ten = [9:50]',
                hint: 'Write each time in numbers:'
            },
            {
                title: 'Time\n in\n Words',
                text:
                    "2:15 = [quarter past two,two fifteen]\n \n 12:00 = [twelve o'clock,noon,twelve,twelve noon]\n \n 7:30 = [half past seven,seven thirty]\n \n 6:45 = [quarter to seven,six forty-five]\n \n 2:10 = [ten past two,two ten]\n \n ",
                hint: 'Write out each time in words:'
            },
            {
                title: 'In,\n At,\n On',
                text:
                    'I have to work [at] night.\n \n Five o’clock [in] the morning is too early to get up.\n \n I’ll pick you up [at] noon.\n \n I like to take a nap [in] the afternoon.\n \n My birthday is [in] a month, [on] the 17th.\n \n We’ll meet [on] Saturday [at] 3:00 [in] the afternoon.\n \n ',
                hint:
                    'Use one of the following prepositions of time to fill in the blanks in each sentence:\n \n in / at / on'
            }
        ],
        visualWS: [
            {
                title: 'Telling\nTime',
                options: ['9:15', '2:45', '7:00', '9:30', '6:45', '8:15'],
                text: [
                    'Half past nine = [9:30]\n \n Quarter past eight = [8:15]\n \n Seven o’clock = [7:00]\n \n Quarter to three = [2:45]\n \n Quarter past nine = [9:15]\n \n Quarter to seven = [6:45]\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop the each clock to match its time expression below:'
            },
            {
                title: 'Talk\n About\n Time',
                text: [
                    'The party starts [at] 2:45.\n \n I will go to the beach [in] July.\n \n [At] half past 7, I went for a run.\n \n [On] Saturday, we will go to the concert.\n \n [In] December, I traveled to see my family.\n \n She went to school [at] 8:00 [in] the morning.\n \n [In] the afternoon, it was raining.\n \n'
                ],
                hint: 'Drag and drop the correct preposition to fill in the blanks in each sentence below:',
                type: 1,
                visualType: 1,
                options: ['on', 'at', 'in']
            }
        ],
        tags: ['New Songs', 'Vocabulary', 'Time', 'Events', 'Routine', 'Party', 'Clock']
    },
    {
        title: 'ONCE\n- A -\nWEEK',
        searchTitle: 'once a week',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Once a Week.m4a'
            },
            '',
            {
                label: 'ACAPELLA',
                file: 'Once a Week Acapella.mp3'
            }
        ],
        lyrics:
            'I listen to music, he watches TV\n She looks at a picture. What does she see?\n It is a man sitting at a table\n Having lunch using a fork to eat\n \n On a Saturday in September\n Talking with my friend Vanessa\n She told me hello, I said “what’s up?”\n Just took an exam, man it was tough\n \n Once a week at 5 P.M.\n I go to Maria’s house with all my friends\n All day I can’t wait to go\n And will it be fun? Yes, I think so\n \n Once a week at 5 P.M.\n I go to Maria’s house with all my friends\n All day I can’t wait to go\n And will it be fun? Yes, I think so\n \n I am good at speaking English\n I am bad at dancing tango\n But I’m better than my teacher Peter\n Man, he dances like a flamingo\n \n I have a brother, I am ten years old\n Do we have homework? I hope so\n I wrote it down in my agenda\n and I’ll do it, ‘cause I always remember\n \n Once a week at 5 P.M.\n I go to Maria’s house with all my friends\n All day I can’t wait to go\n And will it be fun? Yes, I think so\n \n Once a week at 5 P.M.\n I go to Maria’s house with all my friends\n All day I can’t wait to go\n And will it be fun? Yes, I think so\n \n \n',
        writtenWS: [
            {
                title: 'ON THIS DAY/\nAT THIS TIME',
                text:
                    'I go to school [on] Monday [at] 8:00AM.\n \nI visit my grandmother [on] Tuesday [at] 4:00 PM.\n \nI take the bus downtown [on] Wednesday [at] 3:30 PM.\n \n[At] noon [on] Thursday, I have lunch with my aunt.\n \n[At] 7:00 PM [on] Friday I see a movie.\n \nI get up [at] 11:00 AM [on] Saturday.\n \n[At] 2:00 PM [on] Sunday, I play soccer with my friends.\n',
                hint: 'Choose “on” or “at” for the blanks in the sentences.'
            },
            {
                title: 'Look At /\n Listen To',
                text:
                    '[Look at] the crowd of people arriving at the hall.\n \n [Look at] the line of people waiting to get in.\n \n [Look at] the lights in the room.\n \n [Look at] the musicians walking on to  the stage.\n \n [Look at] the costumes the band are wearing.\n \n [Listen to] the guitar playing.\n \n [Listen to,Look at] the piano.\n \n [Listen to,Look at] the drums.\n \n [Listen to] the words of the song.\n \n [Listen to] the cheers of the crowd.\n \n',
                hint: 'Choose “Look at” or “listen to” to begin each phrase.'
            }
        ],
        visualWS: [
            {
                title: 'AT,\nTO,\nFOR',
                text: [
                    'I listen [to] music, he watches TV\nShe looks [at] a picture. What does she see?\nIt is a man sitting [at] a table\nHaving lunch using a fork [to] eat\n',
                    'Once a week [at] 5:00 pm,\nI go [to] Maria’s house with all my friends.'
                ],
                hint: 'Drag and drop the correct preposition to fill in the blanks in each sentence:',
                type: 1,
                visualType: 1,
                options: ['at', 'to', 'for']
            }
        ],
        tags: ['New Songs', 'Prepositions', 'Verbs', 'Vocabulary', 'Time', 'Schedule', 'Routine', 'Present Tense']
    },
    {
        title: 'TOWNS\n- AND -\nCITIES',
        searchTitle: 'towns and cities',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Towns and Cities.m4a'
            },
            '',
            {
                label: 'ACAPELLA',
                file: 'Towns and Cities Acapella.m4a'
            }
        ],
        lyrics:
            'Towns and cities, cities and towns\n Cities are bigger, more noise and sound\n Towns are smaller, buildings are lower\n And the streets, those are shorter\n \n Towns and cities, cities and towns\n Cities are bigger, more noise and sound\n Towns are smaller, buildings are lower\n And the streets, those are shorter\n \n We can do many things\n Go shopping then go out in the evening\n And some are by the sea\n Others in the mountains, it’s so pretty\n \n Towns and cities have a mayor\n With counselors at town hall they work there\n Organize services for all\n Festivals, the winter ball\n \n Towns and cities, cities and towns\n Cities are bigger, more noise and sound\n Towns are smaller, buildings are lower\n And the streets, those are shorter\n \n Towns and cities, cities and towns\n Cities are bigger, more noise and sound\n Towns are smaller, buildings are lower\n And the streets, those are shorter\n \n What’s in the city?\n Some public transport\n Underground and the bus\n Get my toys at department stores\n Watch a movie at the cinema\n In the town there are smaller buildings\n My house is next to a square\n Medicine at the chemist\n There is a school, my friends are there\n \n Towns and cities, cities and towns\n Cities are bigger, more noise and sound\n Towns are smaller, buildings are lower\n And the streets, those are shorter\n \n Towns and cities, cities and towns\n Cities are bigger, more noise and sound\n Towns are smaller, buildings are lower\n And the streets, those are shorter\n \n Towns and cities, cities and towns\n Cities are bigger, more noise and sound\n Towns are smaller, buildings are lower\n And the streets, those are shorter\n \n Towns and cities, cities and towns\n Cities are bigger, more noise and sound\n Towns are smaller, buildings are lower\n And the streets, those are shorter\n \n',
        writtenWS: [
            {
                title: 'In My\n Town,\n In My\n City',
                text:
                    'In my [town] I can walk everywhere.\n \n In the [city] I have to take the bus.\n \n In my town I can sleep with the window open because it’s [quiet].\n \n In the city I have to close the window because people make too much [noise].\n \n In my town the buildings are [shorter].\n \n In the city the buildings are [taller].\n \n There are more [people] in a city than in a town.\n \n There are longer [streets] in a city than a town.\n \n In my [town] there is just one school, but in the city there are many.\n \n When I go to a cinema in the city, I have a choice of many [movies].\n \n When I go out to eat in my town, there are only a few [cafes].\n \n',
                hint:
                    'Use one of the following words to fill in the blanks and complete each sentence correctly:\n \n city / town / taller / longer / noise / quiet / streets / people / movies / cafes / lower'
            }
        ],
        visualWS: [
            {
                title: 'Streets',
                text: ['streets are shorter', 'streets are wider'],
                type: 2,
                visualType: 2,
                ans: ['towns', 'cities'],
                options: ['towns', 'cities'],
                hint: 'Drag and drop "Towns" and "Cities" to their appropriate descriptions:'
            },
            {
                title: 'Bldgs.',
                text: ['buildings are taller', 'buildings are shorter'],
                type: 2,
                visualType: 2,
                ans: ['cities', 'towns'],
                options: ['towns', 'cities'],
                hint: 'Drag and drop "Towns" and "Cities" to their appropriate descriptions:'
            },
            {
                title: 'By / At / In',
                text: [
                    'Some towns and cities are [by] the sea,\n Others are [in] the mountains, it’s so pretty.\n',
                    'I get my toys [at] the department store,\n Watch a movie [at] the cinema.\n'
                ],
                hint: 'Drag and drop the correct preposition to fill in the blanks in each sentence:',
                type: 1,
                visualType: 1,
                options: ['by', 'at', 'in']
            }
        ],
        flashcards: [
            ['cinema', 'a place people go to watch movies'],
            ['town', 'an area where people live and work, smaller than a city'],
            ['city', 'an area where many people live and work, bigger than a town'],
            ['sound', 'a specific thing you can hear'],
            ['noise', 'a non-specific sound'],
            [
                'public transport',
                'methods of travel - such as subways, trains, and buses - that are available to the public'
            ],
            ['underground', 'a form of public transport that involves subways running underground'],
            ['department store', 'a large store where people can buy a variety of goods']
        ],
        tags: ['New Songs', 'Vocabulary', 'Prepositions', 'Adjectives', 'Comparisons', 'City', 'Town', 'Daily Routine']
    },
    {
        title: 'WORK',
        searchTitle: 'work',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Work.m4a'
            },
            '',
            {
                label: 'ACAPELLA',
                file: 'Work Acapella.m4a'
            }
        ],
        lyrics:
            'We work, we do activities\n We get money for the work we do\n For example, people work on trousers\n And work to sell them to me and you\n \n We work, we do activities\n We get money for the work we do\n For example, people work on trousers\n And work to sell them to me and you\n \n Some jobs use resources from nature\n Mining, fishing, farmers with a cow\n Some jobs make products\n in the industries of furniture, textile, automotive, wow!\n \n Some jobs use resources from nature\n Mining, fishing, farmers with a cow\n Some jobs make products\n in the industries of furniture, textile, automotive, wow!\n \n We work, we do activities\n We get money for the work we do\n For example people work on trousers\n And work to sell them to me and you\n \n We work, we do activities\n We get money for the work we do\n For example people work on trousers\n And work to sell them to me and you\n \n Some jobs provide services like\n a doctor that helps patients\n Some work in retail\n As shop owners or shop assistants\n \n Some jobs provide services like\n a doctor that helps patients\n Some work in retail\n As shop owners or shop assistants\n \n We work, we do activities\n We get money for the work we do\n For example people work on trousers\n And work to sell them to me and you\n \n We work we do activities\n We get money for the work we do\n For example people work on trousers\n And work to sell them to me and you\n \n ',
        flashcards: [
            ['trousers', 'pants; a piece of clothing worn from the waist down, covering each leg'],
            ['work (noun)', 'job; an activity one gets paid to do'],
            ['to work (verb)', 'to do a job; to do an activity that one gets paid for'],
            ['resources', 'materials used to perform an activity or job'],
            ['miner', 'a person who works in a mine to gather resources from the earth'],
            ['fisherman', 'a person who catches fish'],
            ['farmer', 'a person who grows crops or raises animals on their land'],
            ['furniture', 'objects used in one’s home, such as chairs, tables, beds, and sofas'],
            ['textile', 'cloth or fabric'],
            ['automotive', 'relating to automobiles, such as cars, trucks, and motorcycles'],
            ['doctor', 'a person who works at a hospital and takes care of others when they are ill'],
            ['retail', 'a job that involves selling products to customers (“working in retail”)'],
            ['shop owner', 'shopkeeper; a person that owns a retail store'],
            ['shop assistant', 'a person that works at a retail store, selling products to customers']
        ],
        writtenWS: [
            {
                title: 'Work,\n Part 1',
                text:
                    'My brother works in a [hospital], treating the sick; he is a [doctor].\n \n My aunt works in a [shop], selling clothing; she is a [clerk].\n \n My friend works on a [farm], growing vegetables; he is a [farmer].\n \n I work at a [school], instructing students; I am a [teacher].\n \n That man works for an [airline], flying planes; he is a [pilot].\n \n ',
                hint:
                    'Choose from the following words to fill in the blanks in each sentence below:\n \n school / teacher / shop / clerk / farm / farmer / hospital / doctor / airline / pilot\n \n '
            },
            {
                title: 'Work,\n Part 2',
                text:
                    'Her job is to protect the city from crime; she is a [police officer].\n \n He defends people in court; he is a [lawyer].\n \n She takes pictures for the newspaper; she is a [photographer].\n \n They build things from wood; they are [carpenters].\n \n She has a part in a movie; she is an [actress].\n \n ',
                hint:
                    'Choose from the following words to fill in the blanks in each sentence below:\n \n carpenters / lawyer / actress / photographer / janitor / police officer'
            },
            {
                title: 'Work,\n Part 3',
                text:
                    'A waiter works in a [restaurant].\n \n A DJ might work at a [radio station].\n \n A scientist might work in a [laboratory].\n \n A teacher works in a [school].\n \n ',
                hint:
                    'Choose from the following words to fill in the blanks in each sentence below:\n \n laboratory / restaurant / radio station / school'
            }
        ],
        visualWS: [
            {
                title: 'Family\n and\n Work',
                options: ['teacher', 'farmer', 'shopkeeper', 'doctor', 'artist', 'firefighter'],
                text: [
                    'My father grows tomatoes on his land. He is a [farmer].\n \n His sister owns a clothing store. She is a [shopkeeper].\n \n My brother works at a school, and helps students learn about science. He is a [teacher].\n \n My friend’s mother makes paintings and sculptures. She is an [artist].\n \n I work with my department to put out fires in my city. I am a [firefighter].\n \n My grandfather worked at a hospital, helping people recover from illnesses. He was a [doctor].\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop each job to fill in the blanks in the sentences below:'
            }
        ],
        tags: ['New Songs', 'Verbs', 'Vocabulary', 'Work', 'Jobs', 'Present Tense', 'Money']
    },
    {
        title: 'Habitats',
        searchTitle: 'habitats',
        music: [
            {
                label: 'STUDIO VERSION',
                file: 'Habitats.m4a'
            },
            '',
            {
                label: 'ACAPELLA',
                file: 'Habitats Acapella.m4a'
            }
        ],
        lyrics:
            'I am oviparous, I lay eggs\n I am a toucan, fly with friends\n I live in a habitat, rainforest\n Weather is warm, rain is pouring\n \n I am oviparous, I lay eggs\n I am a toucan, fly with friends\n I live in a habitat, rainforest\n Weather is warm, rain is pouring\n \n Wet rainforest, dry desert\n Cold polar region\n Forest, trees, birds and bees\n All of the animals singing\n \n Wet rainforest, dry desert\n Cold polar region\n Forest, trees, birds and bees\n All of the animals singing\n \n I am viviparous, I don’t lay eggs\n I am a camel, with friends\n I live in a habitat, yes, the desert\n Night is cold, day is hot weather\n \n I am viviparous, I don’t lay eggs\n I am a camel, with friends\n I live in a habitat, yes, the desert\n Night is cold, day is hot weather\n \n Wet rainforest, dry desert\n Cold polar region\n Forest, trees, birds and bees\n All of the animals singing\n \n Wet rainforest, dry desert\n Cold polar region\n Forest, trees, birds and bees\n All of the animals singing\n \n I am oviparous, I lay eggs\n I am a penguin, with friends\n I live in a habitat, polar region\n The weather is cold, no chameleons\n \n I am oviparous, I lay eggs\n I am a penguin, with friends\n I live in a habitat, polar region\n The weather is cold, no chameleons\n \n Wet rainforest, dry desert\n Cold polar region\n Forest, trees, birds and bees\n All of the animals singing\n \n Wet rainforest, dry desert\n Cold polar region\n Forest, trees, birds and bees\n All of the animals singing\n \n ',
        flashcards: [
            ['viviparous', 'describes an animal that gives birth to live offspring'],
            ['oviparous', 'describes an animal that produces offspring by laying eggs, which then hatch'],
            ['wet (habitat)', 'describes a habitat where it rains a lot'],
            ['dry (habitat)', 'describes a habitat where it does not rain much'],
            ['cold (habitat)', 'describes a habitat that has very low temperatures'],
            ['toucan', 'a colorful, tropical bird that lives in the rainforest'],
            ['camel', 'a large animal with a long neck and one or two humps that lives in the desert'],
            ['penguin', 'a black and white bird that lives in a polar region']
        ],
        writtenWS: [
            {
                title: 'Habitats\n and\n Climates',
                text:
                    'That is a penguin. It lives in a [polar region].\n \n That is a chameleon. It lives in a [rainforest].\n \n That is a camel. It lives in a [desert].\n \n At the South Pole it is [cold].\n \n In the rainforest it is [wet].\n \n In the desert it is [dry].\n \n In the forest trees, there are many [birds].\n \n I need a warm coat when the weather is [cold].\n \n You won’t find a penguin in a [desert,rainforest].\n \n You won’t find a camel in a [polar region,rainforest].\n \n \n ',
                hint:
                    'Choose one of the following words to fill in the blanks in each sentence:\n \n desert / rainforest / polar region / wet / dry / cold / birds'
            }
        ],
        visualWS: [
            {
                title: 'Natural\nHabitats',
                options: ['ocean', 'rainforest', 'mountain', 'garden', 'desert', 'polar regions'],
                text: [
                    'Toucans live in the [rainforest].\n \n Penguins live in [polar regions].\n \n Camels live in the [desert].\n \n Fish live in the [ocean].\n \n '
                ],
                type: 1,
                visualType: 2,
                hint: 'Drag and drop a habitat to complete each sentence below:'
            },
            {
                title: 'Wet,\nCold,\nDry',
                text: ['[Wet] rainforest\n \n [Dry] desert\n \n [Cold] polar region\n \n '],
                hint: 'Drag and drop the correct adjective to fill in the blanks next to each habitat:',
                type: 1,
                visualType: 1,
                options: ['wet', 'cold', 'dry']
            }
        ],
        tags: ['New Songs', 'Vocabulary', 'Adjectives', 'Animals', 'Habitats', 'Present Tense']
    }
];
