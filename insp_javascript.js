var pics = [
"<p><img src='/inspire/static/0828220636.jpg'></p>",
"<p><img src='/inspire/static/somer_rise_4.jpg'></p>",
"<p><img src='/inspire/static/somer_rise_9.jpg'></p>",
"<p><img src='/inspire/static/somer_rise_11.jpg'></p>",
"<p><img src='/inspire/static/trentriver.jpg'></p>",
]

var pics2 = [
"<p><img src='/inspire/static/0828220636b.jpg'></p>",
"<p><img src='/inspire/static/0813220622b.jpg'></p>",
"<p><img src='/inspire/static/somer_rise_2.jpg'></p>",
"<p><img src='/inspire/static/somer_rise_3.jpg'></p>",
"<p><img src='/inspire/static/aransaspass.jpg'></p>",
]






var inspire_quote = [
"So whether you eat or drink or whatever you do, do it all for the glory of God. - 1 Corinthians 10:31",
"Love is patient, love is kind. It does not envy, it does not boast, it is not proud. - 1 Corinthians 13:4",
"Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen. - Ephesians 4:29",
"Get rid of all bitterness, rage and anger, brawling and slander, along with every form of malice. - Ephesians 4:31",
"Do not forget to show hospitality to strangers, for by so doing some people have shown hospitality to angels without knowing it. - Hebrews 13:2",
"Dear children, let us not love with words or tongue but with actions and in truth. - 1 John 3:18",
"Blessed are the peacemakers, for they will be called children of God. - Matthew  5:9",
"Do not judge, or you too will be judged. - Matthew  7:1",
"Love must be sincere. Hate what is evil; cling to what is good. - Romans 12:9",
"Be devoted to one another in love. Honor one another above yourselves. - Romans 12:10",
"Accept those whose faith is weak, without quarreling over disputable matters. - Romans 14:1",
"For we brought nothing into the world, and we can take nothing out of it. - 1 Timothy 6:7",
"Warn divisive people once, and then warn them a second time. After that, have nothing to do with them. - Titus 3:10",
"Now faith is the substance of things hoped for, the evidence of things not seen. - Hebrews 11:1",
"God gave us a spirit not of fear but of power and love and self-control. - 2 Timothy 1:7",
"I can do all things through him who strengthens me. - Philippians 4:13",
"Delight yourself in the Lord, and he will give you the desires of your heart. - Psalm 37:4",
"The Lord is my strength and my shield; in him my heart trusts... - Psalm 28:7",
"Whatever you ask in prayer, believe that you have received it, and it will be yours. - Mark 11:24",
"I sought the Lord, and he answered me and delivered me from all my fears.- Psalm 34:4",  
"May the God of hope fill you with all joy and peace... - Romans 15:13", 
"Encourage one another and build one another up... - 1 Thessalonians 5:11",
"For I know the plans I have for, to prosper you and not to harm you, plans to give you hope and a future. - Jeremiah 29:11", 
"In all things God works for the good of those who love him... - Romans 8:28",
"Lord your God is he who goes with you to fight for you against your enemies... - Deuteronomy 20:4",  
"Come to me, all who labor and are heavy laden, and I will give you rest. - Matthew 11:28",  
"Taste and see that the LORD is good; blessed is the one who takes refuge in Him. - Psalm 34:8", 
"For the LORD is a sun and shield; the LORD bestows favor and honor... - Psalm 84:11", 
"May the God of hope fill you with all joy and peace as you trust in him... - Romans 15:13",
"The God of all grace, who called you to his eternal glory in Christ... will himself restore you and make you strong, firm and steadfast. - 1 Peter 5:10",
"Hold unswervingly to the hope we profess, for he who promised is faithful. - Hebrews 10:23",
"I pray that the eyes of your heart may be enlightened in order that you may know the hope to which he has called you, the riches of his glorious inheritance in his holy people, - Ephesians 1:13",
"We remember before our God and Father your work produced by faith, your labor prompted by love, and your endurance inspired by hope in our Lord Jesus Christ. - 1 Thessalonians 1:3",
"He who began a good work in you will carry it on to completion until the day of Christ Jesus. - Philippians 1:6",
"I wait for the LORD, my whole being waits, and in his word I put my hope. - Psalm 130:5",
"And hope does not put us to shame, because God’s love has been poured out into our hearts through the Holy Spirit... - Romans 5:5",
"God is love, and whoever abides in love abides in God, and God abides in him. - 1 John 4:16",  
"See what kind of love the Father has given to us, that we should be called children of God... - 1 John 3:1",
"Put on love, which binds everything together in perfect harmony. - Colossians 3:14",
"Keep loving one another earnestly, since love covers a multitude of sins. - 1 Peter 4:8",
"Owe no one anything, except to love each other, for the one who loves another has fulfilled the law. - Romans 13:8",
"Let all that you do be done in love. - 1 Corinthians 16:14",
"Anyone who does not love does not know God, because God is love. - 1 John 4:8",
"God so loved the world, that he gave his only begotten Son, that whoever believes in him should not perish but have eternal life. - John 3:16",
"A commandment I give to you, that you love one another: just as I have loved you, you also are to love one another... - John 13:34-35",  
"Greater love has no one than this, that someone lay down his life for his friends. - John 15:13",  
"You shall love the Lord your God with all your heart, all your soul, all your mind and all your strength. - Mark 12:29",
"You shall love your neighbor as yourself. There is no other commandment greater ... - Mark 12:31",
"So now faith, hope, and love abide, these three; but the greatest of these is love. - 1 Corinthians 13:13",
"God shows his love for us in that while we were still sinners, Christ died for us. - Romans 5:8",
"With all humility and gentleness, with patience, bearing with one another in love, - Ephesians 4:2",
"A friend loves at all times, and a brother is born for adversity. - Proverbs 17:17",
"Let love be genuine. Abhor what is evil; hold fast to what is good. - Romans 12:9",
]

function newInspire() {
    var randonNumber = Math.floor(Math.random() * (pics.length));
    document.getElementById('picDisplay').innerHTML = pics[randonNumber];

     var randonNumber = Math.floor(Math.random() * (pics2.length));
    document.getElementById('picDisplay2').innerHTML = pics2[randonNumber];


    var randonNumber = Math.floor(Math.random() * (inspire_quote.length));
    document.getElementById('quoteDisplay').innerHTML = inspire_quote[randonNumber];
}
