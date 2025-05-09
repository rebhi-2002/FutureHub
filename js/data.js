const data = {
	youtube: [
		{ id: 'yt1', title: "FreeCodeCamp", category: "programming", description: "Free tutorials on web dev, Python, and more.", url: "https://www.youtube.com/@freecodecamp", mediaType: "image", media: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg", featured: true },
		{ id: 'yt2', title: "The Net Ninja", category: "programming", description: "Learn React, Node.js, and modern frameworks.", url: "https://www.youtube.com/@NetNinja", mediaType: "image", media: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg", featured: true },
		{ id: 'yt3', title: "English Addict", category: "english-learning", description: "Fun lessons to master English fluency.", url: "https://www.youtube.com/@EnglishAddictwithMrSteve", mediaType: "image", media: "https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg", featured: false },
		{ id: 'yt4', title: "Flux Academy", category: "design", description: "Master UI/UX and graphic design skills.", url: "https://www.youtube.com/@FluxAcademy", mediaType: "image", media: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg", featured: true },
		{ id: 'yt5', title: "Tech With Tim", category: "programming", description: "Python, AI, and game dev tutorials.", url: "https://www.youtube.com/@TechWithTim", mediaType: "image", media: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg", featured: true },
		{ id: 'yt6', title: "Academind", category: "programming", description: "Web dev courses on JS, React, and more.", url: "https://www.youtube.com/@academind", mediaType: "image", media: "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg", featured: false },
		{ id: 'yt7', title: "DesignCourse", category: "design", description: "UI/UX and front-end design tutorials.", url: "https://www.youtube.com/@DesignCourse", mediaType: "image", media: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg", featured: false },
		{ id: 'yt8', title: "English with Lucy", category: "english-learning", description: "British English lessons for all levels.", url: "https://www.youtube.com/@EnglishwithLucy", mediaType: "image", media: "https://images.pexels.com/photos/905485/pexels-photo-905485.jpeg", featured: true },
		{ id: 'yt9', title: "Corey Schafer", category: "programming", description: "In-depth Python and Django tutorials.", url: "https://www.youtube.com/@coreyms", mediaType: "image", media: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg", featured: false },
		{ id: 'yt10', title: "Two Minute Papers", category: "ai-tech", description: "Quick insights on AI and tech papers.", url: "https://www.youtube.com/@TwoMinutePapers", mediaType: "image", media: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg", featured: true },
		{ id: 'yt11', title: "Fireship", category: "programming", description: "Fast-paced coding tutorials in 100 seconds.", url: "https://www.youtube.com/@Fireship", mediaType: "image", media: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg", featured: true },
		{ id: 'yt12', title: "Charisma on Command", category: "productivity", description: "Improve communication and confidence.", url: "https://www.youtube.com/@CharismaOnCommand", mediaType: "image", media: "https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg", featured: false },
		{ id: 'yt13', title: "Abdelrahman Gamal", category: "arabic-programming", description: "Tutorials on programming and web development.", url: "https://www.youtube.com/@AbdelrahmanGamal", mediaType: "image", media: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg", featured: true },
		{ id: 'yt14', title: "Abdullah Almehmadi", category: "arabic-programming", description: "Arabic coding tutorials for beginners.", url: "https://www.youtube.com/@AbdullahAlmehmadi", mediaType: "image", media: "https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg", featured: false },
		{ id: 'yt15', title: "Abouzaid", category: "arabic-programming", description: "Learn coding with practical examples.", url: "https://www.youtube.com/@abouzaid", mediaType: "image", media: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg", featured: false },
		{ id: 'yt16', title: "Academy of Computing", category: "programming", description: "Courses on computer science fundamentals.", url: "https://www.youtube.com/@academyofcomputing", mediaType: "image", media: "https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg", featured: true },
		{ id: 'yt17', title: "Adel Nasim", category: "arabic-programming", description: "Arabic tutorials on programming and tech.", url: "https://www.youtube.com/@AdelNasim", mediaType: "image", media: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg", featured: false },
		{ id: 'yt18', title: "Adobe Creative Cloud", category: "design", description: "Tutorials on Photoshop, Illustrator, and more.", url: "https://www.youtube.com/@AdobeCreativeCloud", mediaType: "image", media: "https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg", featured: true },
		{ id: 'yt19', title: "Abdo EL Aziz Gamal", category: "arabic-programming", description: "Web development and coding tips.", url: "https://www.youtube.com/@AbdoELAzizGamal", mediaType: "image", media: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg", featured: false },
		{ id: 'yt20', title: "Andy's Tech Tutorials", category: "programming", description: "Beginner-friendly tech tutorials.", url: "https://www.youtube.com/@AndysTechTutorials", mediaType: "image", media: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg", featured: false },
		{ id: 'yt21', title: "Blender Official", category: "design", description: "Official Blender tutorials for 3D modeling.", url: "https://www.youtube.com/@BlenderOfficial", mediaType: "image", media: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg", featured: true },
		{ id: 'yt22', title: "Blender Guru", category: "design", description: "Advanced Blender tutorials for 3D artists.", url: "https://www.youtube.com/@blenderguru", mediaType: "image", media: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg", featured: true },
		{ id: 'yt23', title: "Clarusway", category: "programming", description: "IT and coding bootcamp tutorials.", url: "https://www.youtube.com/@clarusway", mediaType: "image", media: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg", featured: false },
		{ id: 'yt24', title: "Code with Antonio", category: "programming", description: "Full-stack development tutorials.", url: "https://www.youtube.com/@codewithantonio", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true },
		{ id: 'yt25', title: "Coderbyte Developers", category: "programming", description: "Coding challenges and solutions.", url: "https://www.youtube.com/@CoderbyteDevelopers", mediaType: "image", media: "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg", featured: false },
		{ id: 'yt26', title: "Code Sistency", category: "programming", description: "Practical coding projects and tips.", url: "https://www.youtube.com/@codesistency", mediaType: "image", media: "https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg", featured: false },
		{ id: 'yt27', title: "Code Tube", category: "programming", description: "Learn coding with step-by-step guides.", url: "https://www.youtube.com/@codetube2616", mediaType: "image", media: "https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg", featured: false },
		{ id: 'yt28', title: "Codezilla", category: "programming", description: "Fun coding tutorials for all levels.", url: "https://www.youtube.com/@Codezilla", mediaType: "image", media: "https://images.pexels.com/photos/1181672/pexels-photo-1181672.jpeg", featured: true },
		{ id: 'yt29', title: "Coding2go", category: "programming", description: "Quick coding lessons for beginners.", url: "https://www.youtube.com/@coding2go", mediaType: "image", media: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg", featured: false },
		{ id: 'yt30', title: "CS50", category: "programming", description: "Harvard's intro to computer science.", url: "https://www.youtube.com/@cs50", mediaType: "image", media: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg", featured: true },
		{ id: 'yt31', title: "Edraak", category: "arabic-education", description: "Arabic online courses and tutorials.", url: "https://www.youtube.com/@EdraakOrg", mediaType: "image", media: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg", featured: false },
		{ id: 'yt32', title: "Elsa Scola", category: "english-learning", description: "English lessons with a fun approach.", url: "https://www.youtube.com/@ElsaScola", mediaType: "image", media: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg", featured: true },
		{ id: 'yt33', title: "Elzero Tube", category: "arabic-programming", description: "Arabic web dev tutorials.", url: "https://www.youtube.com/@ElzeroTube", mediaType: "image", media: "https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg", featured: false },
		{ id: 'yt34', title: "Elzero Web School", category: "arabic-programming", description: "Comprehensive web development courses.", url: "https://www.youtube.com/@ElzeroWebSchool", mediaType: "image", media: "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg", featured: true },
		{ id: 'yt35', title: "Fathy And Abusrea", category: "arabic-programming", description: "Arabic coding and tech tutorials.", url: "https://www.youtube.com/@FathyAndAbusrea", mediaType: "image", media: "https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg", featured: false },
		{ id: 'yt36', title: "GreatStack", category: "programming", description: "Web dev projects and tutorials.", url: "https://www.youtube.com/@GreatStackDev", mediaType: "image", media: "https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg", featured: true },
		{ id: 'yt37', title: "GreenSock Learning", category: "design", description: "GSAP animation tutorials.", url: "https://www.youtube.com/@GreenSockLearning", mediaType: "image", media: "https://images.pexels.com/photos/11035371/pexels-photo-11035371.jpeg", featured: false },
		{ id: 'yt38', title: "GSG Technical Training", category: "programming", description: "Tech training for professionals.", url: "https://www.youtube.com/@gsgtechnicaltraining9595", mediaType: "image", media: "https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg", featured: false },
		{ id: 'yt39', title: "Howard Pinsky", category: "design", description: "Adobe Photoshop and Lightroom tutorials.", url: "https://www.youtube.com/@HowardPinsky", mediaType: "image", media: "https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg", featured: true },
		{ id: 'yt40', title: "Huxn WebDev", category: "programming", description: "Modern web development tutorials.", url: "https://www.youtube.com/@huxnwebdev", mediaType: "image", media: "https://images.pexels.com/photos/1181370/pexels-photo-1181370.jpeg", featured: false },
		{ id: 'yt41', title: "I Know Python", category: "programming", description: "Python tutorials for all levels.", url: "https://www.youtube.com/@Iknowpython", mediaType: "image", media: "https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg", featured: true },
		{ id: 'yt42', title: "JavaScript King", category: "programming", description: "Master JavaScript with practical guides.", url: "https://www.youtube.com/@JavaScriptKing", mediaType: "image", media: "https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg", featured: false },
		{ id: 'yt43', title: "JavaScript Mastery", category: "programming", description: "Advanced JS and React projects.", url: "https://www.youtube.com/@javascriptmastery", mediaType: "image", media: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg", featured: true },
		{ id: 'yt44', title: "Jenny's Lectures", category: "programming", description: "Computer science and programming tutorials.", url: "https://www.youtube.com/@JennyslecturesCSIT", mediaType: "image", media: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg", featured: false },
		{ id: 'yt45', title: "Jonas Schmedtmann", category: "programming", description: "Web dev and JavaScript courses.", url: "https://www.youtube.com/@jonasschmedtmann", mediaType: "image", media: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg", featured: true },
		{ id: 'yt46', title: "Kishan Sheth", category: "programming", description: "Coding tips and project tutorials.", url: "https://www.youtube.com/@KishanSheth21", mediaType: "image", media: "https://images.pexels.com/photos/1181347/pexels-photo-1181347.jpeg", featured: false },
		{ id: 'yt47', title: "Knowledge Center", category: "programming", description: "Tech and programming tutorials.", url: "https://www.youtube.com/@KnowledgeCenter", mediaType: "image", media: "https://images.pexels.com/photos/1181348/pexels-photo-1181348.jpeg", featured: true },
		{ id: 'yt48', title: "Master Liu", category: "programming", description: "Coding and software development tips.", url: "https://www.youtube.com/@masterliu1892", mediaType: "image", media: "https://images.pexels.com/photos/1181349/pexels-photo-1181349.jpeg", featured: false },
		{ id: 'yt49', title: "Photon Trading", category: "trading", description: "Trading strategies and tips.", url: "https://www.youtube.com/@PhotonTrading", mediaType: "image", media: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg", featured: false },
		{ id: 'yt50', title: "Maximilian Schwarzmüller", category: "programming", description: "In-depth web dev tutorials.", url: "https://www.youtube.com/@maximilian-schwarzmueller", mediaType: "image", media: "https://images.pexels.com/photos/1181350/pexels-photo-1181350.jpeg", featured: true },
		{ id: 'yt51', title: "Mr CyberWolf", category: "programming", description: "Cybersecurity and coding tutorials.", url: "https://www.youtube.com/@MrCyberWolf", mediaType: "image", media: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg", featured: false },
		{ id: 'yt52', title: "Mr Web", category: "programming", description: "Web development for beginners.", url: "https://www.youtube.com/@Mr_Web", mediaType: "image", media: "https://images.pexels.com/photos/1181351/pexels-photo-1181351.jpeg", featured: false },
		{ id: 'yt53', title: "Mustafa Sadiq", category: "arabic-programming", description: "Arabic programming tutorials.", url: "https://www.youtube.com/@mustafasadiq", mediaType: "image", media: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg", featured: true },
		{ id: 'yt54', title: "Neso Academy", category: "programming", description: "Engineering and programming lectures.", url: "https://www.youtube.com/@nesoacademy", mediaType: "image", media: "https://images.pexels.com/photos/1181344/pexels-photo-1181344.jpeg", featured: true },
		{ id: 'yt55', title: "NEXT END", category: "programming", description: "Advanced coding tutorials.", url: "https://www.youtube.com/@NEXTEND", mediaType: "image", media: "https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg", featured: false },
		{ id: 'yt56', title: "Nology TV", category: "programming", description: "Tech and coding insights.", url: "https://www.youtube.com/@NologyTV", mediaType: "image", media: "https://images.pexels.com/photos/1181369/pexels-photo-1181369.jpeg", featured: false },
		{ id: 'yt57', title: "Omar Ahmed", category: "arabic-programming", description: "Arabic tutorials on coding.", url: "https://www.youtube.com/@OmarAhmedx14", mediaType: "image", media: "https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg", featured: false },
		{ id: 'yt58', title: "One Piece Coding", category: "programming", description: "Fun coding projects and tutorials.", url: "https://www.youtube.com/@OnePieceCoding", mediaType: "image", media: "https://images.pexels.com/photos/1181367/pexels-photo-1181367.jpeg", featured: true },
		{ id: 'yt59', title: "Online Tutorials", category: "design", description: "Creative web design tutorials.", url: "https://www.youtube.com/@OnlineTutorialsYT", mediaType: "image", media: "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg", featured: true },
		{ id: 'yt60', title: "Pen Paper", category: "programming", description: "Coding explained simply.", url: "https://www.youtube.com/@PenPaper95", mediaType: "image", media: "https://images.pexels.com/photos/1181366/pexels-photo-1181366.jpeg", featured: false },
		{ id: 'yt61', title: "Polygon Runway", category: "design", description: "3D modeling and animation tutorials.", url: "https://www.youtube.com/@polygonrunway", mediaType: "image", media: "https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg", featured: true },
		{ id: 'yt62', title: "Program With Gio", category: "programming", description: "Practical programming tutorials.", url: "https://www.youtube.com/@ProgramWithGio", mediaType: "image", media: "https://images.pexels.com/photos/1181365/pexels-photo-1181365.jpeg", featured: false },
		{ id: 'yt63', title: "Programmer Hazem Ahmad", category: "arabic-programming", description: "Arabic coding tutorials.", url: "https://www.youtube.com/@ProgrammerHazemAhmad", mediaType: "image", media: "https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg", featured: false },
		{ id: 'yt64', title: "Programmers Zone", category: "programming", description: "Coding projects and tips.", url: "https://www.youtube.com/@programmerszone7788", mediaType: "image", media: "https://images.pexels.com/photos/1181364/pexels-photo-1181364.jpeg", featured: true },
		{ id: 'yt65', title: "Programming with Mosh", category: "programming", description: "Structured programming courses.", url: "https://www.youtube.com/@programmingwithmosh", mediaType: "image", media: "https://images.pexels.com/photos/1181363/pexels-photo-1181363.jpeg", featured: true },
		{ id: 'yt66', title: "Droos Shorts", category: "arabic-education", description: "Quick educational lessons.", url: "https://www.youtube.com/@droos_shorts", mediaType: "image", media: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg", featured: false },
		{ id: 'yt67', title: "Simply Learned", category: "education", description: "Simplified learning tutorials.", url: "https://www.youtube.com/@simplylearned1405", mediaType: "image", media: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg", featured: false },
		{ id: 'yt68', title: "Speak English With Vanessa", category: "english-learning", description: "Practical English lessons.", url: "https://www.youtube.com/@SpeakEnglishWithVanessa", mediaType: "image", media: "https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg", featured: true },
		{ id: 'yt69', title: "Special Coder", category: "programming", description: "Unique coding tutorials.", url: "https://www.youtube.com/@specialcoder", mediaType: "image", media: "https://images.pexels.com/photos/1181362/pexels-photo-1181362.jpeg", featured: false },
		{ id: 'yt70', title: "Spicy Coders", category: "programming", description: "Engaging coding lessons.", url: "https://www.youtube.com/@SpicyCoders", mediaType: "image", media: "https://images.pexels.com/photos/1181361/pexels-photo-1181361.jpeg", featured: false },
		{ id: 'yt71', title: "Stoney Codes", category: "programming", description: "Coding for beginners.", url: "https://www.youtube.com/@stoneycodes", mediaType: "image", media: "https://images.pexels.com/photos/1181358/pexels-photo-1181358.jpeg", featured: false },
		{ id: 'yt72', title: "Traversy Media", category: "programming", description: "Web dev and programming tutorials.", url: "https://www.youtube.com/@TraversyMedia", mediaType: "image", media: "https://images.pexels.com/photos/1181340/pexels-photo-1181340.jpeg", featured: true },
		{ id: 'yt73', title: "Youssef Shawky", category: "arabic-programming", description: "Arabic coding and tech tutorials.", url: "https://www.youtube.com/@YoussefShawkyshooter", mediaType: "image", media: "https://images.pexels.com/photos/1181393/pexels-photo-1181393.jpeg", featured: false },
		{ id: 'yt74', title: "Udemy", category: "education", description: "Online courses and tutorials.", url: "https://www.youtube.com/@udemy", mediaType: "image", media: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg", featured: true },
		{ id: 'yt75', title: "Unleash Now", category: "arabic-programming", description: "Arabic programming tutorials.", url: "https://www.youtube.com/@unleashnow-nidalqanadilo", mediaType: "image", media: "https://images.pexels.com/photos/1181392/pexels-photo-1181392.jpeg", featured: false },
		{ id: 'yt76', title: "Visual Paradigm", category: "programming", description: "Software design and UML tutorials.", url: "https://www.youtube.com/@VisualParadigm", mediaType: "image", media: "https://images.pexels.com/photos/1181342/pexels-photo-1181342.jpeg", featured: false },
		{ id: 'yt77', title: "Wael Abo Hamza", category: "arabic-programming", description: "Flutter and mobile dev tutorials.", url: "https://www.youtube.com/@WaelabohamzaFlutter", mediaType: "image", media: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg", featured: true },
		{ id: 'yt78', title: "Web Prodigies", category: "programming", description: "Web development tutorials.", url: "https://www.youtube.com/@webprodigies", mediaType: "image", media: "https://images.pexels.com/photos/1181341/pexels-photo-1181341.jpeg", featured: false },
		{ id: 'yt79', title: "WordPress", category: "programming", description: "WordPress development tutorials.", url: "https://www.youtube.com/@WordPress", mediaType: "image", media: "https://images.pexels.com/photos/1181339/pexels-photo-1181339.jpeg", featured: true },
		{ id: 'yt80', title: "Yehia Tech", category: "arabic-programming", description: "Arabic tech and coding tutorials.", url: "https://www.youtube.com/@yehiatech", mediaType: "image", media: "https://images.pexels.com/photos/1181390/pexels-photo-1181390.jpeg", featured: false },
		{ id: 'yt81', title: "YouTube Creators", category: "content-creation", description: "Tips for YouTube content creators.", url: "https://www.youtube.com/@youtubecreators", mediaType: "image", media: "https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg", featured: true },
		{ id: 'yt82', title: "Edraak MOOCs", category: "arabic-education", description: "Massive open online courses in Arabic.", url: "https://www.youtube.com/@EdraakMOOCs", mediaType: "image", media: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg", featured: false },
		{ id: 'yt83', title: "Droos Online", category: "arabic-education", description: "Arabic educational tutorials.", url: "https://www.youtube.com/@DroosOnline4u", mediaType: "image", media: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg", featured: true },
		{ id: 'yt84', title: "Ghareeb Elshaikh", category: "arabic-programming", description: "Arabic programming tutorials.", url: "https://www.youtube.com/@GhareebElshaikh", mediaType: "image", media: "https://images.pexels.com/photos/1181389/pexels-photo-1181389.jpeg", featured: false },
		{ id: 'yt85', title: "Muhammed Shushan", category: "arabic-programming", description: "Arabic coding and tech tutorials.", url: "https://www.youtube.com/@muhammedshushan", mediaType: "image", media: "https://images.pexels.com/photos/1181388/pexels-photo-1181388.jpeg", featured: false },
		{ id: 'yt86', title: "YouTube Official", category: "content-creation", description: "Official YouTube channel with platform updates.", url: "https://www.youtube.com/@YouTube", mediaType: "image", media: "https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg", featured: false },
		{ id: "yt87", title: "WordPress", category: "programming", description: "WordPress is more than a publishing platform. It’s a powerful and empowering technology built by a global community of passionate contributors, united by the spirit of freedom; to create and share without barriers.", url: "https://youtube.com/@wordpress?si=WJltsDSjBwIE57PW", mediaType: "image", media: "https://images.pexels.com/photos/1181339/pexels-photo-1181339.jpeg", featured: true },
		{ id: "yt88", title: "Complete Course: Create a Professional WordPress Store with Automated Payment and Shipping", category: "arabic-programming", description: "A step-by-step guide to building a professional WordPress store, integrating payment and shipping automation. Covers hosting, domain setup, WooCommerce, theme installation, product management, AI-powered content creation, and more.", url: "https://youtu.be/ijUPpN9hwB0?si=7K7NwcNO04RaEqzp", mediaType: "image", media: "https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg", featured: true },
		{ id: "yt89", title: "Comprehensive WordPress Course in Arabic", category: "arabic-programming", description: "A complete WordPress course from zero to mastery, including local server setup (XAMPP), Elementor, WooCommerce, and building projects like personal sites, company sites, and online stores. Includes course materials, assignments, and expert guidance from a 7-year experienced instructor.", url: "https://youtu.be/pp_o1caZdiI?si=ea8YJA94YRQCc6in", mediaType: "image", media: "https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg", featured: true},
	],
	books: [
		{ id: 'bk1', title: "Clean Code", category: "programming", description: "By Robert C. Martin. Write readable code.", url: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'bk2', title: "Eloquent JavaScript", category: "programming", description: "By Marijn Haverbeke. Master JS.", url: "https://eloquentjavascript.net/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'bk3', title: "You Don't Know JS", category: "programming", description: "By Kyle Simpson. Deep dive into JavaScript.", url: "https://github.com/getify/You-Dont-Know-JS", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: 'bk4', title: "Designing Data-Intensive Applications", category: "programming", description: "By Martin Kleppmann. Build scalable systems.", url: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'bk5', title: "The Design of Everyday Things", category: "design", description: "By Don Norman. Principles of UX design.", url: "https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'bk6', title: "Deep Work", category: "productivity", description: "By Cal Newport. Focus and productivity tips.", url: "https://www.amazon.com/Deep-Work-Focused-Success-Distracted/dp/1455586692", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: 'bk7', title: "Refactoring", category: "programming", description: "By Martin Fowler. Improve code quality.", url: "https://www.amazon.com/Refactoring-Improving-Design-Existing-Code/dp/0134757599", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: 'bk8', title: "Sprint", category: "design", description: "By Jake Knapp. Solve problems with design sprints.", url: "https://www.amazon.com/Sprint-Solve-Problems-Test-Ideas/dp/150112174X", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'bk9', title: "Atomic Habits", category: "productivity", description: "By James Clear. Build lasting habits.", url: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'bk10', title: "Introduction to Algorithms", category: "programming", description: "By Thomas H. Cormen. Master algorithms.", url: "https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk11", title: "JavaScript: The Definitive Guide", category: "programming", description: "By David Flanagan. Comprehensive guide to JavaScript.", url: "https://www.amazon.com/JavaScript-Definitive-Guide-Activate-Your/dp/1491952024", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk12", title: "The Pragmatic Programmer", category: "programming", description: "By Andrew Hunt and David Thomas. Best practices for developers.", url: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk13", title: "Code Complete", category: "programming", description: "By Steve McConnell. Guide to writing high-quality code.", url: "https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk14", title: "Computer Science: An Interdisciplinary Approach", category: "programming", description: "By Robert Sedgewick. Links computer science with programming.", url: "https://www.amazon.com/Computer-Science-Interdisciplinary-Robert-Sedgewick/dp/0134076427", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk15", title: "Don't Make Me Think", category: "design", description: "By Steve Krug. A guide to usability and UX design.", url: "https://www.amazon.com/Dont-Make-Me-Think-Revisited/dp/0321965515", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk16", title: "The Non-Designer's Design Book", category: "design", description: "By Robin Williams. Design principles for non-designers.", url: "https://www.amazon.com/Non-Designers-Design-Book-4th/dp/0133966151", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk17", title: "Thinking with Type", category: "design", description: "By Ellen Lupton. A guide to typography and design.", url: "https://www.amazon.com/Thinking-Type-Critical-Designers-Students/dp/1568989695", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk18", title: "Universal Principles of Design", category: "design", description: "By William Lidwell. Comprehensive design principles.", url: "https://www.amazon.com/Universal-Principles-Design-Revised-Updated/dp/1592535879", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk19", title: "Getting Things Done", category: "productivity", description: "By David Allen. Time management and productivity system.", url: "https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk20", title: "The 7 Habits of Highly Effective People", category: "productivity", description: "By Stephen Covey. Habits for personal effectiveness.", url: "https://www.amazon.com/Habits-Highly-Effective-People-Anniversary/dp/1982137274", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk21", title: "Essentialism", category: "productivity", description: "By Greg McKeown. Focus on what truly matters.", url: "https://www.amazon.com/Essentialism-Disciplined-Pursuit-Greg-McKeown/dp/0804137382", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk22", title: "Make Your Bed", category: "productivity", description: "By William H. McRaven. Small habits for big success.", url: "https://www.amazon.com/Make-Your-Bed-Little-Things/dp/1455570249", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk23", title: "Deep Learning", category: "ai-learning", description: "By Ian Goodfellow, Yoshua Bengio, and Aaron Courville. Guide to deep learning.", url: "https://www.amazon.com/Deep-Learning-Adaptive-Computation-Machine/dp/0262035618", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk24", title: "Artificial Intelligence: A Modern Approach", category: "ai-learning", description: "By Stuart Russell and Peter Norvig. Comprehensive AI guide.", url: "https://www.amazon.com/Artificial-Intelligence-Modern-Approach-4th/dp/0134610997", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk25", title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow", category: "ai-learning", description: "By Aurélien Géron. Practical machine learning guide.", url: "https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk26", title: "Neural Networks and Deep Learning", category: "ai-learning", description: "By Michael Nielsen. Free online book on neural networks.", url: "http://neuralnetworksanddeeplearning.com/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk27", title: "Data Science for Business", category: "analytics", description: "By Foster Provost and Tom Fawcett. Data analytics for business decisions.", url: "https://www.amazon.com/Data-Science-Business-Data-Analytic-Thinking/dp/1449361323", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk28", title: "Practical Statistics for Data Scientists", category: "analytics", description: "By Peter Bruce and Andrew Bruce. Stats for data science.", url: "https://www.amazon.com/Practical-Statistics-Data-Scientists-Essential/dp/149207294X", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk29", title: "Storytelling with Data", category: "analytics", description: "By Cole Nussbaumer Knaflic. Visualize data effectively.", url: "https://www.amazon.com/Storytelling-Data-Visualization-Business-Professionals/dp/1119002257", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk30", title: "The Visual Display of Quantitative Information", category: "analytics", description: "By Edward Tufte. Classic book on data visualization.", url: "https://www.amazon.com/Visual-Display-Quantitative-Information/dp/0961392142", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk31", title: "Jab, Jab, Jab, Right Hook", category: "social-media", description: "By Gary Vaynerchuk. Social media marketing strategies.", url: "https://www.amazon.com/Jab-Right-Hook-Story-Social/dp/006227306X", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk32", title: "The Art of Social Media", category: "social-media", description: "By Guy Kawasaki and Peg Fitzpatrick. Practical social media guide.", url: "https://www.amazon.com/Art-Social-Media-Power-Tips/dp/1591848075", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk33", title: "Social Media Marketing Workbook", category: "social-media", description: "By Jason McDonald. Comprehensive social media marketing guide.", url: "https://www.amazon.com/Social-Media-Marketing-Workbook-Advertising/dp/B0BZFJMS8V", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk34", title: "Likeable Social Media", category: "social-media", description: "By Dave Kerpen. Build a likable social media presence.", url: "https://www.amazon.com/Likeable-Social-Media-Third-Delight/dp/1260453286", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "bk35", title: "HTML and CSS: Design and Build Websites", category: "programming", description: "By Jon Duckett. Learn HTML and CSS with a visual approach.", url: "https://www.amazon.com/HTML-CSS-Design-Build-Websites/dp/1118008189", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk36", title: "CSS: The Definitive Guide", category: "programming", description: "By Eric Meyer and Estelle Weyl. Comprehensive CSS guide.", url: "https://www.amazon.com/CSS-Definitive-Guide-Visual-Presentation/dp/1449393195", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk37", title: "Learning Web Design", category: "programming", description: "By Jennifer Niederst Robbins. Covers HTML, CSS, and web design basics.", url: "https://www.amazon.com/Learning-Web-Design-Beginners-HTML/dp/1491960205", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk38", title: "Bootstrap 5: From Beginner to Advanced", category: "programming", description: "By Laurence Svekis. Practical guide to Bootstrap 5.", url: "https://www.amazon.com/Bootstrap-5-Beginner-Advanced-Projects/dp/B09F8X5K7L", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk39", title: "Tailwind CSS: Up and Running", category: "programming", description: "By Jack Herrington. Learn Tailwind CSS practically.", url: "https://www.amazon.com/Tailwind-CSS-Running-Jack-Herrington/dp/1098115244", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk40", title: "JavaScript: The Good Parts", category: "programming", description: "By Douglas Crockford. Best practices for JavaScript.", url: "https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk41", title: "Head First HTML, CSS, and JavaScript", category: "programming", description: "By Elisabeth Robson and Eric Freeman. Interactive guide to HTML, CSS, and JS.", url: "https://www.amazon.com/Head-First-HTML-CSS-JavaScript/dp/1449324495", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk42", title: "jQuery in Action", category: "programming", description: "By Bear Bibeault and Yehuda Katz. Practical jQuery guide.", url: "https://www.amazon.com/jQuery-Action-Bear-Bibeault/dp/1617292079", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk43", title: "Pro Git", category: "programming", description: "By Scott Chacon and Ben Straub. Comprehensive guide to Git.", url: "https://git-scm.com/book/en/v2", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk44", title: "The Productivity Project", category: "productivity", description: "By Chris Bailey. Productivity tips including shortcuts.", url: "https://www.amazon.com/Productivity-Project-Accomplishing-Managing-Attention/dp/1101904054", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk45", title: "Designing Interfaces", category: "design", description: "By Jenifer Tidwell. Guide to UI and UX design patterns.", url: "https://www.amazon.com/Designing-Interfaces-Patterns-Effective-Interaction/dp/1449379702", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk46", title: "SEO 2025: The Ultimate Guide", category: "marketing", description: "By Adam Clarke. Modern SEO strategies for 2025.", url: "https://www.amazon.com/SEO-2025-Ultimate-Guide-Optimization/dp/B0BZFJMS8V", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk47", title: "The Clean Coder", category: "programming", description: "By Robert C. Martin. Professional practices for coders.", url: "https://www.amazon.com/Clean-Coder-Conduct-Professional-Programmers/dp/0137081073", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk48", title: "Head First Design Patterns", category: "programming", description: "By Eric Freeman and Elisabeth Robson. Learn design patterns in Java.", url: "https://www.amazon.com/Head-First-Design-Patterns-Brain-Friendly/dp/0596007124", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "bk49", title: "Data Structures and Algorithms in Java", category: "programming", description: "By Robert Lafore. Covers data structures like LinkedList in Java.", url: "https://www.amazon.com/Data-Structures-Algorithms-Java-2nd/dp/0672324539", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true }
	],
	references: [
		{ id: 'ref1', title: "MDN Web Docs", category: "references", description: "Complete web dev guide.", url: "https://developer.mozilla.org", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'ref2', title: "React Docs", category: "references", description: "Official React documentation.", url: "https://react.dev", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'ref3', title: "W3Schools", category: "references", description: "Tutorials and references for web dev.", url: "https://www.w3schools.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: 'ref4', title: "Node.js Docs", category: "references", description: "Official Node.js documentation.", url: "https://nodejs.org/en/docs/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'ref5', title: "Python Docs", category: "references", description: "Official Python documentation.", url: "https://docs.python.org", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: 'ref6', title: "CSS Tricks", category: "references", description: "Tips and guides for CSS and web design.", url: "https://css-tricks.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'ref7', title: "Stack Overflow", category: "references", description: "Community-driven Q&A for developers.", url: "https://stackoverflow.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: 'ref8', title: "Vue.js Docs", category: "references", description: "Official Vue.js documentation.", url: "https://vuejs.org", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: 'ref9', title: "AWS Documentation", category: "references", description: "Guides for AWS cloud services.", url: "https://docs.aws.amazon.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		// AI Websites
		{ id: 'ref10', title: 'OpenAI', category: 'ai-websites', description: 'The big brain behind ChatGPT and DALL·E! OpenAI is your go-to for cutting-edge AI APIs and tools that spark creativity.', url: 'https://www.openai.com/', mediaType: 'image', media: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg', featured: true, year: 2015, rating: '★★★★★' },
		{ id: 'ref11', title: 'Google AI', category: 'ai-websites', description: 'Google’s AI powerhouse! From TensorFlow to Vertex AI, it’s built for big dreams and enterprise-level innovation.', url: 'https://ai.google/', mediaType: 'image', media: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg', featured: false, year: 2015, rating: '★★★★☆' },
		{ id: 'ref12', title: 'Runway ML', category: 'ai-websites', description: 'Unleash your creativity! Runway ML makes video and image editing with AI super fun and beginner-friendly.', url: 'https://runwayml.com/', mediaType: 'image', media: 'https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg', featured: false, year: 2018, rating: '★★★☆☆' },
		{id: 'ref13', title: 'DeepAI', category: 'ai-websites', description: 'Simple AI fun! DeepAI offers easy tools for generating text and images, perfect for quick creative experiments.', url: 'https://deepai.org/', mediaType: 'image', media: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg', featured: false, year: 2016, rating: '★★★☆☆' },
		{ id: "ref14", title: "GitHub Docs", category: "references", description: "Official Git and GitHub documentation.", url: "https://docs.github.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "ref15", title: "MDN JavaScript Reference", category: "references", description: "MDN's JavaScript reference guide.", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "ref16", title: "Can I Use", category: "references", description: "Browser compatibility for web features.", url: "https://caniuse.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "ref17", title: "DevDocs", category: "references", description: "All-in-one documentation for developers.", url: "https://devdocs.io", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "ref18", title: "Smashing Magazine", category: "references", description: "Articles and guides on web dev and design.", url: "https://www.smashingmagazine.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "ref19", title: "Hugging Face", category: "ai-websites", description: "Platform for AI models and machine learning.", url: "https://huggingface.co", mediaType: "image", media: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg", featured: true, "year": 2016, "rating": "★★★★★" },
		{ id: "ref20", title: "IBM Watson", category: "ai-websites", description: "AI platform for enterprise solutions.", url: "https://www.ibm.com/watson", mediaType: "image", media: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg", featured: false, "year": 2011, "rating": "★★★★☆" },
		{ id: "ref21", title: "TensorFlow", category: "ai-websites", description: "Official TensorFlow library site.", url: "https://www.tensorflow.org", mediaType: "image", media: "https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg", featured: true, "year": 2015, "rating": "★★★★★" },
		{ id: "ref22", title: "Kaggle", category: "ai-websites", description: "Platform for AI tutorials and data science competitions.", url: "https://www.kaggle.com", mediaType: "image", media: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg", featured: false, "year": 2010, "rating": "★★★★☆" },
		{ id: "ref23", title: "Fast.ai", category: "ai-websites", description: "Free deep learning courses and resources.", url: "https://www.fast.ai", mediaType: "image", media: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg", featured: false, "year": 2016, "rating": "★★★☆☆" },
		{ id: "ref24", title: "Google Analytics Academy", category: "analytics", description: "Free courses to learn Google Analytics.", url: "https://analytics.google.com/analytics/academy/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "ref25", title: "Mixpanel Documentation", category: "analytics", description: "Official docs for Mixpanel analytics.", url: "https://docs.mixpanel.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "ref26", title: "Amplitude Guides", category: "analytics", description: "Guides for Amplitude analytics.", url: "https://help.amplitude.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "ref27", title: "Looker Studio Help", category: "analytics", description: "Google's guide for Looker Studio.", url: "https://support.google.com/looker-studio", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "ref28", title: "Power BI Documentation", category: "analytics", description: "Official Microsoft Power BI docs.", url: "https://docs.microsoft.com/en-us/power-bi/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "ref29", title: "Hootsuite Academy", category: "social-media", description: "Courses for social media management.", url: "https://www.hootsuite.com/pages/academy", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "ref30", title: "Sprout Social Insights", category: "social-media", description: "Blog with social media tips and stats.", url: "https://sproutsocial.com/insights/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "ref31", title: "Buffer Blog", category: "social-media", description: "Articles on social media strategies.", url: "https://buffer.com/resources", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
		{ id: "ref32", title: "Social Media Examiner", category: "social-media", description: "Tips and news on social media marketing.", url: "https://www.socialmediaexaminer.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
		{ id: "ref33", title: "Later Blog", category: "social-media", description: "Blog focusing on visual marketing.", url: "https://later.com/blog/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	],
	images: [
	{ id: 'img1', title: "Unsplash", category: "free-images", description: "High-quality free images.", url: "https://unsplash.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: 'img2', title: "Pexels", category: "free-images", description: "Free stock photos and videos.", url: "https://www.pexels.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: 'img3', title: "Pixabay", category: "free-images", description: "Free images, illustrations, and videos.", url: "https://pixabay.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: 'img4', title: "Freepik", category: "free-images", description: "Free vectors and graphic resources.", url: "https://www.freepik.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: 'img5', title: "Shutterstock", category: "premium-images", description: "Premium stock photos and videos.", url: "https://www.shutterstock.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: 'img6', title: "Adobe Stock", category: "premium-images", description: "High-quality images for creatives.", url: "https://stock.adobe.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: 'img7', title: "Burst by Shopify", category: "free-images", description: "Free images for e-commerce.", url: "https://burst.shopify.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: "img8", title: "Gratisography", category: "free-images", description: "Unique high-quality free images.", url: "https://gratisography.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img9", title: "StockSnap", category: "free-images", description: "Free high-quality stock photos.", url: "https://stocksnap.io", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: "img10", title: "Reshot", category: "free-images", description: "Free images and icons for designers.", url: "https://www.reshot.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img11", title: "FOCA Stock", category: "free-images", description: "Free photos and videos for commercial use.", url: "https://focastock.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: "img12", title: "Picjumbo", category: "free-images", description: "Free high-quality images for projects.", url: "https://picjumbo.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img13", title: "iStock", category: "premium-images", description: "Premium high-quality stock images.", url: "https://www.istockphoto.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img14", title: "Getty Images", category: "premium-images", description: "World-renowned premium stock photos.", url: "https://www.gettyimages.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: "img15", title: "Envato Elements", category: "premium-images", description: "Premium images, videos, and design assets.", url: "https://elements.envato.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img16", title: "Dreamstime", category: "premium-images", description: "Affordable premium stock photos and videos.", url: "https://www.dreamstime.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: "img17", title: "Depositphotos", category: "premium-images", description: "Premium stock images and videos.", url: "https://depositphotos.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img18", title: "Chartist", category: "analytics", description: "Open-source library for data visualization charts.", url: "https://gionkunz.github.io/chartist-js/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img19", title: "Datawrapper Gallery", category: "analytics", description: "Gallery of interactive data visualizations.", url: "https://www.datawrapper.de/gallery", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: "img20", title: "Infogram Templates", category: "analytics", description: "Templates for data visualizations and charts.", url: "https://infogram.com/examples", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img21", title: "Canva Social Media Templates", category: "social-media", description: "Free and premium social media image templates.", url: "https://www.canva.com/templates/social-media/", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
	{ id: "img22", title: "Crello (VistaCreate)", category: "social-media", description: "Templates for social media graphics.", url: "https://create.vista.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: false },
	{ id: "img23", title: "Pablo by Buffer", category: "social-media", description: "Free tool for creating social media images.", url: "https://pablo.buffer.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&", featured: true },
],
	tools: [
		{ id: 'tool1', title: "Visual Studio Code", category: "development", description: "Powerful code editor for developers.", url: "https://code.visualstudio.com", mediaType: "icon", media: "fas fa-code", featured: true },
		{ id: 'tool2', title: "Figma", category: "design", description: "Collaborative design and prototyping tool.", url: "https://www.figma.com", mediaType: "icon", media: "fab fa-figma", featured: true },
		{ id: 'tool3', title: "Git", category: "development", description: "Version control system for tracking changes.", url: "https://git-scm.com", mediaType: "icon", media: "fab fa-git-alt", featured: true },
		{ id: 'tool4', title: 'Apidog', category: 'development', description: 'Your all-in-one API hub! Apidog streamlines designing, testing, and documenting APIs with a slick interface and mocking magic.', url: 'https://apidog.com/', mediaType: 'image', media: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg', featured: false },
		{ id: 'tool5', title: "Docker", category: "development", description: "Containerization for consistent deployments.", url: "https://www.docker.com", mediaType: "icon", media: "fab fa-docker", featured: true },
		{ id: 'tool6', title: "Notion", category: "productivity", description: "All-in-one workspace for notes and projects.", url: "https://www.notion.so", mediaType: "icon", media: "fas fa-sticky-note", featured: false },
		{ id: 'tool7', title: "Trello", category: "project-management", description: "Project management with boards and cards.", url: "https://trello.com", mediaType: "icon", media: "fab fa-trello", featured: true },
		{ id: "tool8", title: "Microsoft Teams", category: "collaboration", description: "A robust collaboration platform by Microsoft with chat, video calls, and integrations.", url: "https://www.microsoft.com/en-us/microsoft-teams", mediaType: "icon", media: "fab fa-microsoft", featured: true },
		{ id: 'tool9', title: 'Todoist', category: 'productivity', description: 'Crush your to-do list! Todoist keeps tasks in check with simple, powerful organization.', url: 'https://todoist.com/', mediaType: 'image', media: 'https://images.pexels.com/photos/1181249/pexels-photo-1181249.jpeg', featured: false },
		{ id: 'tool10', title: 'Obsidian', category: 'productivity', description: 'Link your thoughts! Obsidian’s note-taking weaves ideas into a knowledge web.', url: 'https://obsidian.md/', mediaType: 'image', media: 'https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg', featured: true },
		{ id: 'tool11', title: 'Penpot', category: 'design', description: 'Open-source design vibes! Penpot powers UI prototyping with dev-friendly SVG magic.', url: 'https://penpot.app/', mediaType: 'image', media: 'https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg', featured: false },
		{ id: "tool12", title: "Jira", category: "project-management", description: "A powerful project management tool designed for software development teams, offering agile features like sprint planning, bug tracking, and detailed reporting.", url: "https://www.atlassian.com/software/jira", mediaType: "icon", media: "fab fa-jira", featured: true},
		{ id: "tool13", title: "Asana", category: "project-management", description: "A flexible project management tool for teams, supporting task assignments, timelines, and integrations with tools like Slack and Google Drive.", url: "https://asana.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true},
		{ id: "tool14", title: "ClickUp", category: "project-management", description: "An all-in-one project management tool with customizable workflows, Gantt charts, and AI-powered features to streamline complex projects.", url: "https://clickup.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true},
		{ id: "tool15", title: "Boomerang for Gmail", category: "email-management", description: "A Gmail extension to schedule emails, set follow-up reminders, and track responses, enhancing email productivity for freelancers.", url: "https://www.boomeranggmail.com", mediaType: "image", media: "https://placehold.co/600x300/FFF/000?font=Raleway&text=Boomerang", featured: false},
		{ id: "tool16", title: "HubSpot", category: "crm", description: "A CRM platform with email management, marketing automation, and lead tracking tools to streamline client interactions.", url: "https://www.hubspot.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true},
		{ id: "tool17", title: "Zapier", category: "automation", description: "An automation tool that connects apps like Trello, Gmail, and Slack to automate repetitive tasks and boost productivity.", url: "https://zapier.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true},
		{ id: "tool18", title: "Slack", category: "collaboration", description: "A team communication tool with channels, direct messaging, and integrations to keep your team aligned and productive.", url: "https://slack.com", mediaType: "icon", media: "fab fa-slack", featured: true},
		{ id: "tool19", title: "Calendly", category: "scheduling", description: "A scheduling tool to book meetings and appointments effortlessly, syncing with your calendar to avoid conflicts.", url: "https://calendly.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: false},
		{ id: "tool20", title: "Zoho Projects", category: "project-management", description: "A cloud-based project management tool for planning, tracking, and collaborating on tasks. Includes time tracking, Gantt charts, and invoicing features.", url: "https://www.zoho.com/projects", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true},
		{ id: "tool21", title: "Zoho CRM", category: "crm", description: "A customer relationship management tool to manage leads, deals, and customer interactions, empowering businesses to convert more leads and grow revenue.", url: "https://www.zoho.com/crm", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true},
		{ id: "tool22", title: "Zoho Writer", category: "office-suites", description: "A word processing tool for creating and editing documents collaboratively, part of Zoho's cloud office suite.", url: "https://www.zoho.com/writer", mediaType: "icon", media: "fas fa-file-word", featured: false},
		{ id: "tool23", title: "Zoho Sheets", category: "office-suites", description: "A spreadsheet tool for data analysis and collaboration, offering features similar to Google Sheets and Excel.", url: "https://www.zoho.com/sheet", mediaType: "icon", media: "fas fa-table", featured: false},
		{ id: "tool24", title: "Zoho Show", category: "office-suites", description: "A presentation tool for creating engaging slideshows and collaborating with teams in real-time.", url: "https://www.zoho.com/show", mediaType: "icon", media: "fas fa-slideshare", featured: false},
		{ id: "tool25", title: "Zoho Notebook", category: "note-taking", description: "A note-taking app for organizing ideas, tasks, and multimedia notes across devices.", url: "https://www.zoho.com/notebook", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: false},
		{ id: "tool26", title: "Confluence", category: "wikis", description: "A collaborative wiki tool for creating and managing knowledge bases, ideal for team documentation.", url: "https://www.atlassian.com/software/confluence", mediaType: "icon", media: "fab fa-confluence", featured: true},
		{ id: "tool27", title: "Zoho Meeting", category: "web-conferencing", description: "A video conferencing tool for hosting virtual meetings and webinars with teams and clients.", url: "http://www.zoho.com/meeting", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: false},
		{ id: "tool28", title: "Zoho Invoice", category: "invoicing", description: "An invoicing tool for creating, sending, and tracking invoices, integrated with Zoho Books for seamless billing.", url: "https://www.zoho.com/invoice", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true},
		{ id: "tool29", title: "Mailchimp", category: "email-marketing", description: "A marketing platform for creating and tracking email campaigns, with integrations for Shopify, WordPress, and Zoho CRM.", url: "https://mailchimp.com", mediaType: "icon", media: "fas fa-envelope", featured: true},
		{ id: "tool30", title: "Zoho Desk", category: "customer-services", description: "A help desk tool for managing customer support tickets across email, social media, and live chat.", url: "https://www.zoho.com/desk", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true},
		{ id: "tool31", title: "Zoho Mail", category: "email-collaboration", description: "A professional email service with collaboration features, integrated with Zoho's productivity suite.", url: "https://www.zoho.com/mail", mediaType: "icon", media: "fas fa-inbox", featured: false},
		{ id: "tool32", title: "Zoho Books", category: "finance", description: "A cloud-based accounting tool for managing expenses, invoices, and financial reports.", url: "https://www.zoho.com/books", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true},
		{ id: "tool33", title: "Freshdesk", category: "it-help-desk", description: "A help desk tool for managing IT support tickets and customer inquiries efficiently.", url: "https://freshdesk.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: false},
		{ id: "tool34", title: "Bidsketch", category: "customer-solutions", description: "A proposal software for creating professional proposals quickly, with e-signatures and client tracking features.", url: "https://www.bidsketch.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true},
		{ id: "tool35", title: "Shopify", category: "ecommerce", description: "A platform for creating and managing online stores, handling products, payments, and orders with ease.", url: "https://www.shopify.com", mediaType: "icon", media: "fab fa-shopify", featured: true},
		{ id: "tool36", title: "WordPress", category: "cms", description: "A flexible content management system for building websites, blogs, and online stores with thousands of plugins and themes.", url: "https://wordpress.org", mediaType: "icon", media: "fab fa-wordpress", featured: true},
		{ id: "tool37", title: "Basecamp", category: "project-management", description: "An all-in-one toolkit for remote work, offering task management, file sharing, and team communication.", url: "https://basecamp.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true},
		{ id: "tool38", title: "SaneBox", category: "email-management", description: "Helps manage email overload by sorting important emails and moving less urgent ones to a separate folder.", url: "https://www.sanebox.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true},
		{ id: "tool39", title: "Clean Email", category: "email-management", description: "Clean your inbox by removing unwanted emails and keeping it organized with smart filters and rules.", url: "https://clean.email", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true},
		{ id: "tool40", title: "Hubstaff", category: "time-tracking", description: "A time tracking tool with features like screenshots, activity levels, and payroll integration for remote teams.", url: "https://hubstaff.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true},
		{ id: "tool41", title: "Harvest", category: "time-tracking", description: "A time tracking and invoicing tool to monitor project hours and generate reports for better budgeting.", url: "https://www.getharvest.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true},
		{ id: "tool42", title: "Toggl", category: "time-tracking", description: "A simple time tracking tool for teams and freelancers, with powerful reporting and integrations.", url: "https://toggl.com", mediaType: "icon", media: "fas fa-stopwatch", featured: true},
		{ id: "tool43", title: "Paymo", category: "time-tracking", description: "A project management tool with time tracking, task management, and collaboration features.", url: "https://www.paymoapp.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: false},
		{ id: "tool44", title: "RescueTime", category: "time-tracking", description: "An automatic time tracking tool that monitors your activities and helps improve productivity.", url: "https://www.rescuetime.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true},
		{ id: "tool45", title: "Timecamp", category: "time-tracking", description: "A time tracking software for teams, offering automatic tracking, reporting, and invoicing features.", url: "https://www.timecamp.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: false},
		{ id: "tool46", title: "TrackingTime", category: "time-tracking", description: "A time tracking tool for managing tasks, tracking hours, and generating productivity reports.", url: "https://trackingtime.co", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: false},
		{ id: "tool47", title: "Time Doctor", category: "time-tracking", description: "A time tracking tool with employee monitoring, screenshots, and productivity analytics for remote teams.", url: "https://www.timedoctor.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true},
		{ id: "tool48", title: "Timely", category: "time-tracking", description: "An AI-powered time tracking tool that automatically logs your activities and creates timesheets.", url: "https://timelyapp.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true},
		{ id: "tool49", title: "Sheets by Quickbooks", category: "time-tracking", description: "A time tracking tool integrated with Quickbooks, allowing you to log hours, manage payroll, and sync with accounting seamlessly.", url: "https://quickbooks.intuit.com/time-tracking", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: false},
		{ id: "tool50", title: "Sublime Text", category: "development", description: "A lightweight and fast text editor with a sleek interface, popular among developers.", url: "https://www.sublimetext.com", mediaType: "icon", media: "fas fa-edit", featured: false },
		{ id: "tool51", title: "Atom", category: "development", description: "An open-source code editor with powerful customization features and package management.", url: "https://atom.io", mediaType: "icon", media: "fas fa-atom", featured: false },
		{ id: "tool52", title: "Postman", category: "development", description: "A powerful tool for API development, testing, and documentation with an intuitive interface.", url: "https://www.postman.com", mediaType: "icon", media: "fas fa-plug", featured: true },
		{ id: "tool53", title: "Adobe XD", category: "design", description: "A robust UI/UX design tool from Adobe for creating interactive prototypes and designs.", url: "https://www.adobe.com/products/xd.html", mediaType: "icon", media: "fas fa-pen-nib", featured: true },
		{ id: "tool54", title: "Sketch", category: "design", description: "A popular design tool for macOS, widely used for UI/UX design and prototyping.", url: "https://www.sketch.com", mediaType: "icon", media: "fas fa-drafting-compass", featured: true },
		{ id: "tool55", title: "Monday.com", category: "project-management", description: "A flexible project management platform with visual workflows and team collaboration features.", url: "https://monday.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true },
		{ id: "tool56", title: "Wrike", category: "project-management", description: "A powerful project management tool with visual collaboration and task management features.", url: "https://www.wrike.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true },
		{ id: "tool57", title: "Discord", category: "collaboration", description: "A popular collaboration tool with voice, video, and text features, ideal for tech teams.", url: "https://discord.com", mediaType: "icon", media: "fab fa-discord", featured: false },
		{ id: "tool58", title: "Make (Integromat)", category: "automation", description: "A powerful automation tool with a visual interface to connect apps and automate workflows.", url: "https://www.make.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true },
		{ id: "tool59", title: "IFTTT", category: "automation", description: "A simple automation tool to connect apps and devices with 'if this, then that' triggers.", url: "https://ifttt.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: false },
		{ id: "tool60", title: "Doodle", category: "scheduling", description: "A simple scheduling tool for booking meetings and polls, integrating with calendars.", url: "https://doodle.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: false },
		{ id: "tool61", title: "Google Calendar", category: "scheduling", description: "A free and popular tool for managing appointments and syncing with other Google services.", url: "https://calendar.google.com", mediaType: "icon", media: "fab fa-google", featured: true },
		{ id: "tool62", title: "WooCommerce", category: "ecommerce", description: "A WordPress plugin for building customizable online stores with ease.", url: "https://woocommerce.com", mediaType: "icon", media: "fab fa-wordpress", featured: true },
		{ id: "tool63", title: "BigCommerce", category: "ecommerce", description: "A powerful ecommerce platform for creating and managing online stores with advanced features.", url: "https://www.bigcommerce.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true },
		{ id: "tool64", title: "Drupal", category: "cms", description: "A powerful and flexible open-source CMS for building complex websites and web applications.", url: "https://www.drupal.org", mediaType: "icon", media: "fab fa-drupal", featured: false },
		{ id: "tool65", title: "Joomla", category: "cms", description: "An open-source CMS for creating websites and online applications with robust features.", url: "https://www.joomla.org", mediaType: "icon", media: "fab fa-joomla", featured: false },
		{ id: "tool66", title: "Clockify", category: "time-tracking", description: "A free and powerful time tracking tool for teams and freelancers with detailed reporting.", url: "https://clockify.me", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true },
		{ id: "tool67", title: "Nifty", category: "time-tracking", description: "A time tracking tool integrated with project management for seamless workflow tracking.", url: "https://niftypm.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: false },
		{ id: "tool68", title: "Google Analytics", category: "analytics", description: "A powerful tool for tracking and analyzing website traffic and user behavior.", url: "https://analytics.google.com", mediaType: "icon", media: "fas fa-chart-line", featured: true },
		{ id: "tool69", title: "Mixpanel", category: "analytics", description: "An advanced analytics tool for tracking user interactions and product performance.", url: "https://mixpanel.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true },
		{ id: "tool70", title: "IntelliJ IDEA", category: "development", description: "A powerful IDE for Java developers with advanced code assistance and debugging tools.", url: "https://www.jetbrains.com/idea", mediaType: "icon", media: "fas fa-code", featured: true },
		{ id: "tool71", title: "Kubernetes", category: "development", description: "An open-source platform for automating deployment, scaling, and operations of application containers.", url: "https://kubernetes.io", mediaType: "icon", media: "fas fa-cubes", featured: true },
		{ id: "tool72", title: "Canva", category: "design", description: "A user-friendly design tool for creating graphics, presentations, and social media content.", url: "https://www.canva.com", mediaType: "icon", media: "fas fa-palette", featured: true },
		{ id: "tool73", title: "Evernote", category: "productivity", description: "A powerful note-taking app for organizing ideas, tasks, and multimedia notes across devices.", url: "https://evernote.com", mediaType: "icon", media: "fas fa-sticky-note", featured: true },
		{ id: "tool74", title: "Smartsheet", category: "project-management", description: "A project management tool for large-scale projects with spreadsheet-like workflows and automation.", url: "https://www.smartsheet.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true },
		{ id: "tool75", title: "Notion (Project Management)", category: "project-management", description: "A versatile tool for project management with customizable boards, timelines, and databases.", url: "https://www.notion.so", mediaType: "icon", media: "fas fa-sticky-note", featured: true },
		{ id: "tool76", title: "Superhuman", category: "email-management", description: "A high-speed email client designed to boost productivity with shortcuts and AI features.", url: "https://superhuman.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true },
		{ id: "tool77", title: "Salesforce", category: "crm", description: "The leading CRM platform for managing sales, customer relationships, and business growth.", url: "https://www.salesforce.com", mediaType: "icon", media: "fas fa-users", featured: true },
		{ id: "tool78", title: "Microsoft Power Automate", category: "automation", description: "An automation tool by Microsoft to streamline workflows and connect apps with ease.", url: "https://powerautomate.microsoft.com", mediaType: "icon", media: "fab fa-microsoft", featured: true },
		{ id: "tool79", title: "Google Workspace", category: "collaboration", description: "A suite of collaboration tools including Docs, Sheets, and Drive for seamless teamwork.", url: "https://workspace.google.com", mediaType: "icon", media: "fab fa-google", featured: true },
		{ id: "tool80", title: "Microsoft Outlook", category: "scheduling", description: "A widely used tool for scheduling meetings and managing calendars in professional environments.", url: "https://www.microsoft.com/en-us/microsoft-365/outlook", mediaType: "icon", media: "fas fa-calendar-alt", featured: true },
		{ id: "tool81", title: "Microsoft Office 365", category: "office-suites", description: "A comprehensive office suite with Word, Excel, and PowerPoint for productivity and collaboration.", url: "https://www.microsoft.com/en-us/microsoft-365", mediaType: "icon", media: "fab fa-microsoft", featured: true },
		{ id: "tool82", title: "Google Sheets", category: "office-suites", description: "A cloud-based spreadsheet tool for data analysis and collaboration, part of Google Workspace.", url: "https://sheets.google.com", mediaType: "icon", media: "fas fa-table", featured: true },
		{ id: "tool83", title: "Microsoft OneNote", category: "note-taking", description: "A powerful note-taking app for organizing ideas and collaborating across devices.", url: "https://www.onenote.com", mediaType: "icon", media: "fas fa-sticky-note", featured: true },
		{ id: "tool84", title: "Zoom", category: "web-conferencing", description: "A leading video conferencing tool for hosting virtual meetings and webinars with teams and clients.", url: "https://zoom.us", mediaType: "icon", media: "fas fa-video", featured: true },
		{ id: "tool85", title: "FreshBooks", category: "invoicing", description: "A simple invoicing tool for freelancers and small businesses, with time tracking and expense management.", url: "https://www.freshbooks.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true },
		{ id: "tool86", title: "Zendesk", category: "customer-services", description: "A popular help desk tool for managing customer support tickets across multiple channels.", url: "https://www.zendesk.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true },
		{ id: "tool87", title: "Gmail", category: "email-collaboration", description: "A free and widely used email service with collaboration features, integrated with Google Workspace.", url: "https://mail.google.com", mediaType: "icon", media: "fas fa-inbox", featured: true },
		{ id: "tool88", title: "QuickBooks", category: "finance", description: "A leading accounting tool for managing expenses, invoices, and financial reports for small businesses.", url: "https://quickbooks.intuit.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true },
		{ id: "tool89", title: "Proposify", category: "customer-solutions", description: "A tool for creating professional proposals with e-signatures and client tracking features.", url: "https://www.proposify.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true },
		{ id: "tool90", title: "Magento", category: "ecommerce", description: "A powerful ecommerce platform for large-scale online stores with advanced customization features.", url: "https://magento.com", mediaType: "icon", media: "fas fa-shopping-cart", featured: true },
		{ id: "tool91", title: "Squarespace", category: "cms", description: "A user-friendly CMS for building professional websites with beautiful templates.", url: "https://www.squarespace.com", mediaType: "icon", media: "fas fa-globe", featured: true },
		{ id: "tool92", title: "Wix", category: "cms", description: "A popular CMS for creating websites quickly with drag-and-drop features and templates.", url: "https://www.wix.com", mediaType: "icon", media: "fas fa-globe", featured: true },
		{ id: "tool93", title: "My Hours", category: "time-tracking", description: "A simple time tracking tool for teams and freelancers with detailed reporting.", url: "https://myhours.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true },
		{ id: "tool94", title: "ClickTime", category: "time-tracking", description: "A time tracking tool for managing hours, expenses, and budgets with robust reporting.", url: "https://www.clicktime.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: false },
		{ id: "tool95", title: "Timeular", category: "time-tracking", description: "An innovative time tracking tool with a physical device to track tasks effortlessly.", url: "https://timeular.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true },
		{ id: "tool96", title: "Hours", category: "time-tracking", description: "A simple time tracking app for iOS and macOS with a visual timeline for tracking hours.", url: "https://www.hourstimetracking.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: false },
		{ id: "tool97", title: "TMetric", category: "time-tracking", description: "A time tracking tool for teams with productivity analytics and integrations.", url: "https://tmetric.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true },
		{ id: "tool98", title: "Google Analytics", category: "analytics", description: "A free tool by Google to track and analyze website traffic, user behavior, and marketing performance.", url: "https://analytics.google.com", mediaType: "icon", media: "fas fa-chart-line", featured: true },
		{ id: "tool99", title: "Tableau", category: "analytics", description: "A powerful data visualization platform for creating interactive dashboards and reports.", url: "https://www.tableau.com", mediaType: "image", media: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg", featured: true },
		{ id: "tool100", title: "SEMrush", category: "analytics", description: "A digital marketing tool for SEO analysis, keyword research, and competitor tracking.", url: "https://www.semrush.com", mediaType: "image", media: "https://images.pexels.com/photos/1181678/pexels-photo-1181678.jpeg", featured: true },
		{ id: "tool101", title: "Hootsuite", category: "social-media", description: "A platform for managing social media accounts, scheduling posts, and analyzing performance.", url: "https://www.hootsuite.com", mediaType: "icon", media: "fas fa-share-alt", featured: true },
		{ id: "tool102", title: "Sprout Social", category: "social-media", description: "A tool for social media management, analytics, and engagement with detailed reporting.", url: "https://sproutsocial.com", mediaType: "image", media: "https://images.pexels.com/photos/1181674/pexels-photo-1181674.jpeg", featured: true },
		{ id: "tool103", title: "Buffer", category: "social-media", description: "A simple tool for scheduling social media posts and analyzing content performance.", url: "https://buffer.com", mediaType: "icon", media: "fas fa-share-square", featured: true },
	],
	devTools: [
		// Code Editors
		{
			id: 'dt1',
			title: 'Visual Studio Code',
			category: 'code-editors',
			description: 'Your coding playground! VS Code is a free, open-source gem from Microsoft, packed with support for tons of languages and a galaxy of extensions.',
			url: 'https://code.visualstudio.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
			featured: true,
			year: 2015,
			rating: '★★★★★'
		},
		{
			id: 'dt2',
			title: 'Sublime Text',
			category: 'code-editors',
			description: 'Zoom through your code! Sublime Text is lightning-fast and sleek, perfect for quick edits or deep coding sessions with a clean vibe.',
			url: 'https://www.sublimetext.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg',
			featured: true,
			year: 2008,
			rating: '★★★★☆'
		},
		{
			id: 'dt3',
			title: 'Atom',
			category: 'code-editors',
			description: 'A customizable buddy from GitHub! Atom lets you tweak everything, though it’s a bit slower and retired in 2022.',
			url: 'https://atom.io/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
			featured: false,
			year: 2014,
			rating: '★★★★☆'
		},
		{
			id: 'dt4',
			title: 'Notepad++',
			category: 'code-editors',
			description: 'The lightweight champ for Windows! Notepad++ is free and zippy, great for beginners or quick edits on the fly.',
			url: 'https://notepad-plus-plus.org/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg',
			featured: false,
			year: 2003,
			rating: '★★★☆☆'
		},
		{
			id: 'dt5',
			title: 'Vim',
			category: 'code-editors',
			description: 'The coder’s ninja tool! Vim is a command-line legend—super powerful but needs some love to master its keyboard magic.',
			url: 'https://www.vim.org/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg',
			featured: false,
			year: 1991,
			rating: '★★★☆☆'
		},
		{
			id: 'dt21',
			title: 'Cursor',
			category: 'code-editors',
			description: 'AI-powered coding at its best! Cursor builds on VS Code with deep AI integration, offering real-time code suggestions and chat-based debugging.',
			url: 'https://cursor.sh/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★★'
		},
		// Chrome Extensions
		{
			id: 'dt6',
			title: 'Web Developer',
			category: 'chrome-extensions',
			description: 'A Swiss Army knife for devs! This toolbar gives you tools to poke at elements, CSS, forms, and more—your web dev lab in Chrome!',
			url: 'https://chrome.google.com/webstore/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: true,
			year: 2006,
			rating: '★★★★★'
		},
		{
			id: 'dt7',
			title: 'ColorZilla',
			category: 'chrome-extensions',
			description: 'Steal colors like an artist! ColorZilla’s eyedropper and gradient analyzer make picking colors a breeze for designers.',
			url: 'https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignjmkjogoaclbbjmdoboh',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
			featured: true,
			year: 2005,
			rating: '★★★★☆'
		},
		{
			id: 'dt8',
			title: 'WhatFontIs',
			category: 'chrome-extensions',
			description: 'Font detective mode on! Spot any font on a webpage with a click—perfect for designers obsessed with typography.',
			url: 'https://chrome.google.com/webstore/detail/whatfontis/dhkkfheecodjdogpiobgpmmgadgfinfj',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg',
			featured: false,
			year: 2011,
			rating: '★★★★☆'
		},
		{
			id: 'dt9',
			title: 'Wappalyzer',
			category: 'chrome-extensions',
			description: 'Uncover web tech! Wappalyzer reveals the frameworks, CMS, and tools powering any site in a snap.',
			url: 'https://chrome.google.com/webstore/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: true,
			year: 2008,
			rating: '★★★★☆'
		},
		{
			id: 'dt10',
			title: 'JSON Formatter',
			category: 'chrome-extensions',
			description: 'Make JSON pretty! This tool formats and colors JSON data so you can read it without squinting—handy for API explorers!',
			url: 'https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
			featured: false,
			year: 2014,
			rating: '★★★☆☆'
		},
		// AI Tools
		{
			id: 'dt11',
			title: 'ChatGPT',
			category: 'ai-tools',
			description: 'Your chatty AI pal! ChatGPT from OpenAI answers questions, writes text, and even chats in Arabic—your smart friend on speed dial!',
			url: 'https://chat.openai.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
			featured: true,
			year: 2022,
			rating: '★★★★★'
		},
		{
			id: 'dt12',
			title: 'GitHub Copilot',
			category: 'ai-tools',
			description: 'Code like a superhero! Copilot suggests code as you type, turning your ideas into reality faster in VS Code.',
			url: 'https://github.com/features/copilot',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
			featured: true,
			year: 2021,
			rating: '★★★★★'
		},
		{
			id: 'dt13',
			title: 'DALL·E',
			category: 'ai-tools',
			description: 'Turn words into art! DALL·E creates stunning images from text prompts—describe it, and watch the magic happen!',
			url: 'https://www.openai.com/dall-e',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg',
			featured: true,
			year: 2021,
			rating: '★★★★☆'
		},
		{
			id: 'dt14',
			title: 'MidJourney',
			category: 'ai-tools',
			description: 'Craft jaw-dropping art via Discord! MidJourney turns your ideas into high-quality visuals with a creative twist.',
			url: 'https://www.midjourney.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
			featured: false,
			year: 2022,
			rating: '★★★★☆'
		},
		{
			id: 'dt15',
			title: 'Hugging Face',
			category: 'ai-tools',
			description: 'An AI haven for creators and geeks! Hugging Face blends open-source NLP models with a vibrant community, offering a treasure trove for developers and tinkerers alike.',
			url: 'https://huggingface.co/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★☆'
		},
		{
			id: 'dt24',
			title: 'Gemini',
			category: 'ai-tools',
			description: 'Google’s powerful AI! Gemini offers smart conversations, code assistance, and insights for all your questions.',
			url: 'https://gemini.google.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★☆'
		},
		{
			id: 'dt25',
			title: 'DeepSeek',
			category: 'ai-tools',
			description: 'AI for coders and researchers! DeepSeek excels in code generation and scientific analysis with a global reach.',
			url: 'https://www.deepseek.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
			featured: false,
			year: 2023,
			rating: '★★★★☆'
		},
		{
			id: 'dt26',
			title: 'Grok',
			category: 'ai-tools',
			description: 'Your cosmic guide from xAI! Grok answers deep questions, explains complex ideas, and helps with code and more.',
			url: 'https://x.ai/grok',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
			featured: true,
			year: 2024,
			rating: '★★★★★'
		},
		{
			id: 'dt27',
			title: 'Microsoft Copilot',
			category: 'ai-tools',
			description: 'Bing’s AI-powered assistant! Copilot combines search and chat to help with tasks, coding, and creative projects.',
			url: 'https://copilot.microsoft.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★☆'
		},
		// Chrome Extensions (Continued from dt61)
		{
			id: 'dt62',
			title: 'Adblock Plus - Free Ad Blocker',
			category: 'chrome-extensions',
			description: 'Surf ad-free! Adblock Plus blocks intrusive ads on YouTube, social media, and beyond, ensuring a cleaner browsing experience.',
			url: 'https://chrome.google.com/webstore/detail/adblock-plus-free-ad-bloc/cfhdojbkjhnklbpkdaibdccddilifddb',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg',
			featured: true,
			year: 2006,
			rating: '★★★★☆'
		},
		{
			id: 'dt63',
			title: 'AdBlocker Ultimate',
			category: 'chrome-extensions',
			description: 'Ultimate ad-blocking power! AdBlocker Ultimate eliminates ads across websites, boosting page speed and focus.',
			url: 'https://chrome.google.com/webstore/detail/adblocker-ultimate/ohahllgiabjaoigichmmfljhkcfikeof',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg',
			featured: false,
			year: 2017,
			rating: '★★★★☆'
		},
		{
			id: 'dt64',
			title: 'Adobe Acrobat: PDF Edit, Convert, Sign Tools',
			category: 'chrome-extensions',
			description: 'PDFs made simple! View, edit, sign, and convert PDFs directly in Chrome with Adobe Acrobat’s powerful tools.',
			url: 'https://chrome.google.com/webstore/detail/adobe-acrobat-pdf-edit-co/efaidnbmnnnibpcajpcglclefindmkaj',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
			featured: true,
			year: 2013,
			rating: '★★★★☆'
		},
		{
			id: 'dt65',
			title: 'Application Launcher For Drive (by Google)',
			category: 'chrome-extensions',
			description: 'Open Google Drive files instantly! Launch compatible apps like Docs or Sheets directly from Chrome.',
			url: 'https://chrome.google.com/webstore/detail/application-launcher-for-d/lmjegmlicamnimmmehcmrbntzwupcobn',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
			featured: false,
			year: 2014,
			rating: '★★★☆☆'
		},
		{
			id: 'dt66',
			title: 'Avast Online Security & Privacy',
			category: 'chrome-extensions',
			description: 'Stay safe online! Avast blocks malicious sites, trackers, and phishing attempts for secure browsing.',
			url: 'https://chrome.google.com/webstore/detail/avast-online-security-pri/gomekmidlodglbbmalcneegieacbdmki',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★★☆'
		},
		{
			id: 'dt67',
			title: 'AVG Online Security',
			category: 'chrome-extensions',
			description: 'Browse with confidence! AVG protects against phishing, trackers, and unsafe websites in real time.',
			url: 'https://chrome.google.com/webstore/detail/avg-online-security/cmbkeobkljiooepnmpcnjkenngpanhkm',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg',
			featured: false,
			year: 2016,
			rating: '★★★☆☆'
		},
		{
			id: 'dt68',
			title: 'Avira Browser Safety',
			category: 'chrome-extensions',
			description: 'Secure your surfing! Avira blocks trackers, ads, and malicious sites for a private web experience.',
			url: 'https://chrome.google.com/webstore/detail/avira-browser-safety/fkedodclmjaegphfeibegoihclmckfll',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg',
			featured: false,
			year: 2014,
			rating: '★★★☆☆'
		},
		{
			id: 'dt69',
			title: 'Avira Password Manager',
			category: 'chrome-extensions',
			description: 'Never forget a password! Avira syncs and autofills your logins securely across devices.',
			url: 'https://chrome.google.com/webstore/detail/avira-password-manager/jblfdknmphobilhmpmlnkbhogbkeflji',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★☆'
		},
		{
			id: 'dt70',
			title: 'Avira Safe Shopping',
			category: 'chrome-extensions',
			description: 'Shop smarter! Avira finds and applies coupons automatically, saving you money online.',
			url: 'https://chrome.google.com/webstore/detail/avira-safe-shopping/klbhhbmldlifnkmdahmjajhhgncdomfb',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg',
			featured: false,
			year: 2018,
			rating: '★★★☆☆'
		},
		{
			id: 'dt71',
			title: 'Bitdefender Anti-tracker',
			category: 'chrome-extensions',
			description: 'Stop trackers in their tracks! Bitdefender ensures your browsing stays private and fast.',
			url: 'https://chrome.google.com/webstore/detail/bitdefender-anti-tracker/dmjmpigommancmfclkjmkladcdohhmpn',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg',
			featured: false,
			year: 2019,
			rating: '★★★★☆'
		},
		{
			id: 'dt72',
			title: 'Black Menu for Google™',
			category: 'chrome-extensions',
			description: 'Google at your fingertips! Access all Google services like Drive and Maps from a sleek menu.',
			url: 'https://chrome.google.com/webstore/detail/black-menu-for-google/ohjnmnfbldnccjlmgbkljdhaibjpfabn',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg',
			featured: false,
			year: 2013,
			rating: '★★★☆☆'
		},
		{
			id: 'dt73',
			title: 'ChatGPT Search',
			category: 'chrome-extensions',
			description: 'Search smarter! Replace your default search with ChatGPT for AI-powered answers.',
			url: 'https://chrome.google.com/webstore/detail/chatgpt-search/knmlmfgjladjigpiflbjmmnmmglfmpob',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★☆'
		},
		{
			id: 'dt74',
			title: 'Chrome Remote Desktop',
			category: 'chrome-extensions',
			description: 'Access your PC anywhere! Control your desktop remotely with Chrome’s secure tool.',
			url: 'https://chrome.google.com/webstore/detail/chrome-remote-desktop/inomeogfingihgjfdinlljhlcdmjjbia',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
			featured: true,
			year: 2011,
			rating: '★★★★★'
		},
		{
			id: 'dt75',
			title: 'Click&Clean',
			category: 'chrome-extensions',
			description: 'Clean up with one click! Wipe browsing history, cookies, and cache instantly.',
			url: 'https://chrome.google.com/webstore/detail/clickclean/ghgabhipcejejjmhhchfonmamedcbeod',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
			featured: false,
			year: 2010,
			rating: '★★★☆☆'
		},
		{
			id: 'dt76',
			title: 'Color Tab',
			category: 'chrome-extensions',
			description: 'Brighten your browser! Every new tab bursts with a vibrant color palette.',
			url: 'https://chrome.google.com/webstore/detail/color-tab/hkmbahjgphmjfkhemkegniaomjkgnmgb',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★☆☆'
		},
		{
			id: 'dt77',
			title: 'Cookie AutoDelete',
			category: 'chrome-extensions',
			description: 'Keep cookies in check! Automatically deletes cookies after you close a tab.',
			url: 'https://chrome.google.com/webstore/detail/cookie-autodelete/fhcgjolkccmbidmehklmmkjoioiooedl',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★☆'
		},
		{
			id: 'dt78',
			title: 'Copyfish 🐟 Free OCR Software',
			category: 'chrome-extensions',
			description: 'Extract text from anything! Copyfish grabs text from images, videos, or PDFs with OCR.',
			url: 'https://chrome.google.com/webstore/detail/copyfish-%F0%9F%90%9F-free-ocr-soft/eenjdnjldapjajjofmldgmkjaienebjd',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg',
			featured: false,
			year: 2018,
			rating: '★★★★☆'
		},
		{
			id: 'dt79',
			title: 'CSS Peeper',
			category: 'chrome-extensions',
			description: 'Inspect styles like a pro! CSS Peeper reveals colors, fonts, and assets in a sleek UI.',
			url: 'https://chrome.google.com/webstore/detail/css-peeper/mbnbehikldjhnfehhnaidhjhoofhpehk',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★★'
		},
		{
			id: 'dt80',
			title: 'Dark Reader',
			category: 'chrome-extensions',
			description: 'Eye-friendly browsing! Dark Reader applies dark mode to every website for night use.',
			url: 'https://chrome.google.com/webstore/detail/dark-reader/eimadpbcbfnmbkopooifhkefkehkhljf',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
			featured: true,
			year: 2014,
			rating: '★★★★★'
		},
		{
			id: 'dt81',
			title: 'Devbox',
			category: 'chrome-extensions',
			description: 'Local storage made easy! Devbox offers a clean UI to manage and edit browser storage.',
			url: 'https://chrome.google.com/webstore/detail/devbox/gnjkldmlhcdmakokapcklfkmflfkcdbp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
			featured: false,
			year: 2019,
			rating: '★★★☆☆'
		},
		{
			id: 'dt82',
			title: 'Disconnect',
			category: 'chrome-extensions',
			description: 'Privacy first! Disconnect blocks trackers for a faster, more secure web experience.',
			url: 'https://chrome.google.com/webstore/detail/disconnect/jeoacafpbcihiomhlakheieifhpjdfeo',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg',
			featured: false,
			year: 2011,
			rating: '★★★★☆'
		},
		{
			id: 'dt83',
			title: 'DotVPN: Fast & Private VPN',
			category: 'chrome-extensions',
			description: 'Browse freely! DotVPN secures your connection and unlocks restricted content with speed.',
			url: 'https://chrome.google.com/webstore/detail/dotvpn-fast-private-vpn/hnamaoipapahhhibcppflnemhjabgmmn',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★☆☆'
		},
		{
			id: 'dt84',
			title: 'draw.io for Notion',
			category: 'chrome-extensions',
			description: 'Diagram in Notion! Create and edit draw.io diagrams seamlessly within Notion pages.',
			url: 'https://chrome.google.com/webstore/detail/drawio-for-notion/hmmlkaojfejkhgjcokljfmfgkfgknhje',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★★☆'
		},
		{
			id: 'dt85',
			title: 'DuckDuckGo Search & Tracker Protection',
			category: 'chrome-extensions',
			description: 'Search privately! DuckDuckGo blocks trackers and delivers unbiased search results.',
			url: 'https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg',
			featured: true,
			year: 2012,
			rating: '★★★★★'
		},
		{
			id: 'dt86',
			title: 'Enable Right Click',
			category: 'chrome-extensions',
			description: 'Unlock right-click! Bypasses website restrictions to enable context menus and copying.',
			url: 'https://chrome.google.com/webstore/detail/enable-right-click/hhojmcidejmmjfkjckcgocmflfpghmck',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg',
			featured: false,
			year: 2016,
			rating: '★★★☆☆'
		},
		{
			id: 'dt87',
			title: 'Fake Filler',
			category: 'chrome-extensions',
			description: 'Test forms fast! Fake Filler auto-fills web forms with dummy data for developers.',
			url: 'https://chrome.google.com/webstore/detail/fake-filler/bnjjngeakohlkgnlnnjjiejjjodcfnpj',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
			featured: false,
			year: 2018,
			rating: '★★★★☆'
		},
		{
			id: 'dt88',
			title: 'Ghostery Tracker & Ad Blocker',
			category: 'chrome-extensions',
			description: 'Stay invisible! Ghostery blocks ads and trackers, speeding up your browsing.',
			url: 'https://chrome.google.com/webstore/detail/ghostery-%E2%80%93-privacy-adblo/mlomiejdfkolichcflejclcbmpeaniij',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg',
			featured: true,
			year: 2009,
			rating: '★★★★★'
		},
		{
			id: 'dt89',
			title: 'Gmail Sender Icons',
			category: 'chrome-extensions',
			description: 'Spot senders fast! Adds icons to Gmail for quick email sender identification.',
			url: 'https://chrome.google.com/webstore/detail/gmail-sender-icons/fgmfhmnjbjghgccffbaiemjfnljdogai',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★☆☆'
		},
		{
			id: 'dt90',
			title: 'Go Incognito',
			category: 'chrome-extensions',
			description: 'Go stealth! Opens the current tab in incognito mode and clears it from history.',
			url: 'https://chrome.google.com/webstore/detail/go-incognito/mpgjhkmjdmcbifpfjgnfjppdjhnljjoi',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
			featured: false,
			year: 2017,
			rating: '★★★☆☆'
		},
		{
			id: 'dt91',
			title: 'GoFullPage - Full Page Screen Capture',
			category: 'chrome-extensions',
			description: 'Capture it all! Take full-page screenshots without extra permissions, perfect for sharing.',
			url: 'https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★★'
		},
		{
			id: 'dt92',
			title: 'Google Dictionary (by Google)',
			category: 'chrome-extensions',
			description: 'Words at your fingertips! Look up definitions instantly while browsing with Google’s dictionary.',
			url: 'https://chrome.google.com/webstore/detail/google-dictionary-by-goog/mgijmajocgfcbeboacabfgobmjgjcoja',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg',
			featured: false,
			year: 2010,
			rating: '★★★★☆'
		},
		{
			id: 'dt93',
			title: 'Google Docs Offline',
			category: 'chrome-extensions',
			description: 'Work anywhere! Edit Google Docs, Sheets, and Slides offline with seamless syncing.',
			url: 'https://chrome.google.com/webstore/detail/google-docs-offline/ghbmnnjooekpmoecnnnilnnbdlolhkhi',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
			featured: false,
			year: 2014,
			rating: '★★★★☆'
		},
		{
			id: 'dt94',
			title: 'Google Input Tools',
			category: 'chrome-extensions',
			description: 'Type in any language! Google Input Tools supports multilingual typing with ease.',
			url: 'https://chrome.google.com/webstore/detail/google-input-tools/mclkkofklkfljcocdinagocijmpgbhab',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg',
			featured: false,
			year: 2013,
			rating: '★★★☆☆'
		},
		{
			id: 'dt95',
			title: 'Google Translate',
			category: 'chrome-extensions',
			description: 'Break language barriers! Translate web content instantly with Google Translate.',
			url: 'https://chrome.google.com/webstore/detail/google-translate/aapbdbdomjkkjkaonfhkkikfgjllcleb',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg',
			featured: true,
			year: 2010,
			rating: '★★★★★'
		},
		{
			id: 'dt96',
			title: 'Hover Zoom+',
			category: 'chrome-extensions',
			description: 'Zoom in style! Hover over images or videos to enlarge them across websites.',
			url: 'https://chrome.google.com/webstore/detail/hover-zoom+/nonjdcjchghhkdoolnlbekcfllmednbl',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg',
			featured: false,
			year: 2012,
			rating: '★★★★☆'
		},
		{
			id: 'dt97',
			title: 'iCloud Passwords',
			category: 'chrome-extensions',
			description: 'Sync your logins! Access iCloud Keychain passwords for seamless sign-ins on Chrome.',
			url: 'https://chrome.google.com/webstore/detail/icloud-passwords/pejdijmoenmkgeppbflobdenhhabiohd',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
			featured: false,
			year: 2021,
			rating: '★★★☆☆'
		},
		{
			id: 'dt98',
			title: 'IDM Integration Module',
			category: 'chrome-extensions',
			description: 'Download faster! Integrates Internet Download Manager for seamless file downloads.',
			url: 'https://chrome.google.com/webstore/detail/idm-integration-module/ngpampappnmepgilojfohadhhmbhlaek',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★★☆'
		},
		{
			id: 'dt99',
			title: 'IronVest',
			category: 'chrome-extensions',
			description: 'Guard your identity! IronVest secures passwords, payments, and privacy online.',
			url: 'https://chrome.google.com/webstore/detail/ironvest/igcdmnlacmkgichfehpmkklgkhpfahij',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★☆☆'
		},
		{
			id: 'dt100',
			title: 'Lighthouse',
			category: 'chrome-extensions',
			description: 'Optimize your site! Lighthouse audits performance, SEO, and accessibility in Chrome.',
			url: 'https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★★'
		},
		{
			id: 'dt101',
			title: 'Loom – Screen Recorder & Screen Capture',
			category: 'chrome-extensions',
			description: 'Record and share! Capture your screen or webcam and share videos instantly.',
			url: 'https://chrome.google.com/webstore/detail/loom-%E2%80%93-screen-recorder/liecbddmkiiihnedobmlmillhodjkdmm',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★★'
		},
		{
			id: 'dt102',
			title: 'Malwarebytes Browser Guard',
			category: 'chrome-extensions',
			description: 'Stay safe! Malwarebytes blocks scams, trackers, and malicious sites for secure browsing.',
			url: 'https://chrome.google.com/webstore/detail/malwarebytes-browser-guar/ihcjicgdanjaechmadolljecjdpdhjap',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg',
			featured: false,
			year: 2019,
			rating: '★★★★☆'
		},
		{
			id: 'dt103',
			title: 'Markdown Here',
			category: 'chrome-extensions',
			description: 'Write emails in Markdown! Convert plain text to rich formatting with ease.',
			url: 'https://chrome.google.com/webstore/detail/markdown-here/elifhakcjgalahccnjkneoccemfahfoa',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg',
			featured: false,
			year: 2012,
			rating: '★★★☆☆'
		},
		{
			id: 'dt104',
			title: 'Merlin - Ask AI to Research, Write & Review',
			category: 'chrome-extensions',
			description: 'AI-powered assistant! Merlin researches, writes, and summarizes content on any site.',
			url: 'https://chrome.google.com/webstore/detail/merlin-ask-ai-to-research/camplfndhnhihohfjbjkbabdcbjifcfm',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★☆'
		},
		{
			id: 'dt105',
			title: 'Microsoft Bing Search for Chrome',
			category: 'chrome-extensions',
			description: 'Search with Bing! Set Microsoft Bing as your default for AI-enhanced results.',
			url: 'https://chrome.google.com/webstore/detail/microsoft-bing-search-for/ofobhgejmodfcmjngfgmejlbkdhmbden',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★☆☆'
		},
		{
			id: 'dt106',
			title: 'Microsoft Defender Browser Protection',
			category: 'chrome-extensions',
			description: 'Stay secure! Microsoft Defender blocks phishing and malicious sites in real time.',
			url: 'https://chrome.google.com/webstore/detail/microsoft-defender-browse/bkifefpmnbghajlfdmcdlhhcdlkppkha',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
			featured: false,
			year: 2018,
			rating: '★★★★☆'
		},
		{
			id: 'dt107',
			title: 'Momentum',
			category: 'chrome-extensions',
			description: 'Stay focused! Momentum turns new tabs into a calming, productive dashboard.',
			url: 'https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg',
			featured: true,
			year: 2014,
			rating: '★★★★★'
		},
		{
			id: 'dt108',
			title: 'Monica: ChatGPT AI Assistant',
			category: 'chrome-extensions',
			description: 'AI at your side! Monica integrates multiple AI models for chat, search, and writing.',
			url: 'https://chrome.google.com/webstore/detail/monica-%E2%80%94-your-chatgpt-ai/jmigjbbajagopdfabdannfhdhfhnbdfp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★☆'
		},
		{
			id: 'dt109',
			title: 'Netcraft Extension',
			category: 'chrome-extensions',
			description: 'Browse safely! Netcraft protects against phishing and malicious scripts with site insights.',
			url: 'https://chrome.google.com/webstore/detail/netcraft-extension/nenlahapcbkpjkjdjccnmolkfkefmiph',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg',
			featured: false,
			year: 2016,
			rating: '★★★☆☆'
		},
		{
			id: 'dt110',
			title: 'Online PDF Editor (pdf2go.com)',
			category: 'chrome-extensions',
			description: 'Edit PDFs on the go! Convert, compress, and modify PDFs directly in Chrome.',
			url: 'https://chrome.google.com/webstore/detail/online-pdf-editor-pdf2goco/klibjkgcdkdjhlkgoidbbpfjjogpnphp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
			featured: false,
			year: 2019,
			rating: '★★★★☆'
		},
		{
			id: 'dt111',
			title: 'Picture-in-Picture Extension (by Google)',
			category: 'chrome-extensions',
			description: 'Watch anywhere! Float videos in a Picture-in-Picture window while browsing.',
			url: 'https://chrome.google.com/webstore/detail/picture-in-picture-extens/hkgfoiohodffaoepjoklbkhlngnggflf',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg',
			featured: true,
			year: 2018,
			rating: '★★★★★'
		},
		{
			id: 'dt112',
			title: 'Pieces for Developers: Copilot & Code Capture',
			category: 'chrome-extensions',
			description: 'Code smarter! Save, share, and generate code snippets with AI-driven insights.',
			url: 'https://chrome.google.com/webstore/detail/pieces-for-developers-cop/hfjehjeigobjhfkcmplhkaocemjkbjgp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
			featured: true,
			year: 2022,
			rating: '★★★★☆'
		},
		{
			id: 'dt113',
			title: 'PixelBlock',
			category: 'chrome-extensions',
			description: 'Stop email trackers! PixelBlock prevents Gmail tracking pixels from monitoring you.',
			url: 'https://chrome.google.com/webstore/detail/pixelblock/jmpmfcjnflbcoidlgapblgpgbilinlem',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg',
			featured: false,
			year: 2014,
			rating: '★★★☆☆'
		},
		{
			id: 'dt114',
			title: 'Privacy Badger',
			category: 'chrome-extensions',
			description: 'Smart privacy! Privacy Badger learns to block trackers that violate your privacy.',
			url: 'https://chrome.google.com/webstore/detail/privacy-badger/pkehgijcmpdhfbdbbnkijodmdjhbjlgp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
			featured: false,
			year: 2014,
			rating: '★★★★☆'
		},
		{
			id: 'dt115',
			title: 'Pushbullet',
			category: 'chrome-extensions',
			description: 'Connect your devices! Share links, files, and notifications across platforms instantly.',
			url: 'https://chrome.google.com/webstore/detail/pushbullet/chlffhkkfckncgelkpfkmgfjledaudij',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg',
			featured: false,
			year: 2013,
			rating: '★★★★☆'
		},
		{
			id: 'dt116',
			title: 'Quick Source Viewer',
			category: 'chrome-extensions',
			description: 'Peek under the hood! View HTML, CSS, and JavaScript of any page instantly.',
			url: 'https://chrome.google.com/webstore/detail/quick-source-viewer/cfmcghnnfnknfplbjbifejajhacgbejp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: false,
			year: 2012,
			rating: '★★★☆☆'
		},
		{
			id: 'dt117',
			title: 'QuillBot: AI Writing and Grammar Checker Tool',
			category: 'chrome-extensions',
			description: 'Write better! QuillBot paraphrases, checks grammar, and enhances your text with AI.',
			url: 'https://chrome.google.com/webstore/detail/quillbot-ai-writing-and-g/nkmkeefokjnmnhaanodkdjedfekopkjd',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★★'
		},
		{
			id: 'dt118',
			title: 'React Developer Tools',
			category: 'chrome-extensions',
			description: 'Debug React like a pro! Inspect components and states in Chrome DevTools.',
			url: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
			featured: true,
			year: 2015,
			rating: '★★★★★'
		},
		{
			id: 'dt119',
			title: 'Redux DevTools',
			category: 'chrome-extensions',
			description: 'Master Redux! Debug state changes and actions with powerful DevTools integration.',
			url: 'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★★'
		},
		{
			id: 'dt120',
			title: 'RoboForm Password Manager',
			category: 'chrome-extensions',
			description: 'Logins made easy! RoboForm saves and autofills passwords securely across sites.',
			url: 'https://chrome.google.com/webstore/detail/roboform-password-manager/pnloaagbblnbmgnjbggilfbnabanclnk',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
			featured: false,
			year: 2000,
			rating: '★★★★☆'
		},
		{
			id: 'dt121',
			title: 'Save to Google Drive',
			category: 'chrome-extensions',
			description: 'Save to the cloud! Capture web content or screenshots directly to Google Drive.',
			url: 'https://chrome.google.com/webstore/detail/save-to-google-drive/gmbmikajjgmnabiglmofipeabaddhgne',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
			featured: false,
			year: 2012,
			rating: '★★★★☆'
		},
		{
			id: 'dt122',
			title: 'Screenshot YouTube',
			category: 'chrome-extensions',
			description: 'Grab YouTube moments! Capture screenshots of videos with a single click.',
			url: 'https://chrome.google.com/webstore/detail/screenshot-youtube/hjdplhafoedmjdanknflodmfnfjpgdph',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg',
			featured: false,
			year: 2019,
			rating: '★★★☆☆'
		},
		{
			id: 'dt123',
			title: 'Scribe: AI Documentation, SOPs & Screenshots',
			category: 'chrome-extensions',
			description: 'Document effortlessly! Scribe auto-generates guides with screenshots and steps.',
			url: 'https://chrome.google.com/webstore/detail/scribe-ai-documentation-so/akfhggknmjbhbfnkeljjdcmckheocfpp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
			featured: true,
			year: 2020,
			rating: '★★★★☆'
		},
		{
			id: 'dt124',
			title: 'Sider: Chat with All AI Models',
			category: 'chrome-extensions',
			description: 'AI everywhere! Sider’s sidebar chats with DeepSeek, Gemini, and more for instant help.',
			url: 'https://chrome.google.com/webstore/detail/sider-chat-with-all-ai-mo/dckpbojndfoinamcdfhfehlhpbkcgkfh',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★☆'
		},
		{
			id: 'dt125',
			title: 'Simple Allow Copy',
			category: 'chrome-extensions',
			description: 'Copy anything! Bypasses website restrictions to enable text copying with ease.',
			url: 'https://chrome.google.com/webstore/detail/simple-allow-copy/aefehhngiopcdgagkcaclkhldmijpefp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg',
			featured: false,
			year: 2016,
			rating: '★★★☆☆'
		},
		{
			id: 'dt126',
			title: 'Simple Todo',
			category: 'chrome-extensions',
			description: 'Stay organized! Replace new tabs with a minimalist todo list for daily tasks.',
			url: 'https://chrome.google.com/webstore/detail/simple-todo/cdjbcjkejikcbcdhhgagjkgjfhgjdmpg',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg',
			featured: false,
			year: 2018,
			rating: '★★★☆☆'
		},
		{
			id: 'dt127',
			title: 'SingleFile',
			category: 'chrome-extensions',
			description: 'Save entire pages! SingleFile captures a webpage as one HTML file for offline use.',
			url: 'https://chrome.google.com/webstore/detail/singlefile/mpiodijhokgodhhofbcjdecpffjipkle',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg',
			featured: false,
			year: 2010,
			rating: '★★★★☆'
		},
		{
			id: 'dt128',
			title: 'Sitejabber: Ratings & Reviews on Every Site',
			category: 'chrome-extensions',
			description: 'Shop wisely! Sitejabber shows ratings and reviews for websites you visit.',
			url: 'https://chrome.google.com/webstore/detail/sitejabber-ratings-revie/ckhjemlnaenibkmpkoehppcmcemjfhkl',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg',
			featured: false,
			year: 2017,
			rating: '★★★☆☆'
		},
		{
			id: 'dt129',
			title: 'Sitemod.io',
			category: 'chrome-extensions',
			description: 'Edit live websites! Sitemod lets you tweak pages and share changes without coding.',
			url: 'https://chrome.google.com/webstore/detail/sitemodio/ihfggjepkphlkpmkpckhnekjapnbfhfo',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★☆☆'
		},
		{
			id: 'dt130',
			title: 'Smallpdf—Edit, Convert, Compress, & AI Summarize PDF',
			category: 'chrome-extensions',
			description: 'PDF powerhouse! Smallpdf edits, converts, and summarizes PDFs right in Chrome.',
			url: 'https://chrome.google.com/webstore/detail/smallpdf%E2%80%94edit-convert-com/kfkigjnpbcjmgpkombmlobajokodjbob',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
			featured: true,
			year: 2013,
			rating: '★★★★★'
		},
		{
			id: 'dt131',
			title: 'Sneekio',
			category: 'chrome-extensions',
			description: 'Secure your history! Sneekio saves browsing data behind a password, even in incognito.',
			url: 'https://chrome.google.com/webstore/detail/sneekio/pjdgfapjfcopmdnmnmjmlbfjmlhhhmjd',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
			featured: false,
			year: 2021,
			rating: '★★★☆☆'
		},
		{
			id: 'dt132',
			title: 'Stylebot',
			category: 'chrome-extensions',
			description: 'Redesign the web! Stylebot lets you tweak website CSS instantly for custom looks.',
			url: 'https://chrome.google.com/webstore/detail/stylebot/oiaejidbmkiecgbjeifoejpgmdaleoha',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
			featured: false,
			year: 2010,
			rating: '★★★★☆'
		},
		{
			id: 'dt133',
			title: 'Team Password Manager',
			category: 'chrome-extensions',
			description: 'Share securely! Store and autofill team passwords with Team Password Manager.',
			url: 'https://chrome.google.com/webstore/detail/team-password-manager/gnpljhhbhmgodfmhnmjkmgaapdjhlfgl',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★☆☆'
		},
		{
			id: 'dt134',
			title: 'TeamPassword',
			category: 'chrome-extensions',
			description: 'Collaborate with ease! Share and manage team passwords securely in Chrome.',
			url: 'https://chrome.google.com/webstore/detail/teampassword/knmjhlaebafjdogabnlkklhjjhbpfjkl',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
			featured: false,
			year: 2016,
			rating: '★★★☆☆'
		},
		{
			id: 'dt135',
			title: 'Toby: Tab Management Tool',
			category: 'chrome-extensions',
			description: 'Organize your tabs! Toby saves and groups tabs for a clutter-free browser.',
			url: 'https://chrome.google.com/webstore/detail/toby-mini/hddnkoipeenegfoeaoifmndooahdihkj',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★☆'
		},
		{
			id: 'dt136',
			title: 'Trend Micro ID Protection',
			category: 'chrome-extensions',
			description: 'Stay safe online! Blocks dangerous sites, ads, and trackers for secure browsing.',
			url: 'https://chrome.google.com/webstore/detail/trend-micro-id-protection/gncdjbjgfpdifamdmmnbplhfnalcbkmh',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
			featured: false,
			year: 2019,
			rating: '★★★☆☆'
		},
		{
			id: 'dt137',
			title: 'uMatrix',
			category: 'chrome-extensions',
			description: 'Control requests! uMatrix blocks scripts, ads, and trackers with fine-grained settings.',
			url: 'https://chrome.google.com/webstore/detail/umatrix/ogfcmafjalglgifnmanfmnieipoejdcf',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181377/pexels-photo-1181377.jpeg',
			featured: false,
			year: 2014,
			rating: '★★★★☆'
		},
		{
			id: 'dt138',
			title: 'Url Shortener',
			category: 'chrome-extensions',
			description: 'Shorten links fast! Create compact URLs with T.LY, Bitly, and more in Chrome.',
			url: 'https://chrome.google.com/webstore/detail/url-shortener/pokmlpgabdkaobhakemhldckmjjhkebi',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg',
			featured: false,
			year: 2018,
			rating: '★★★☆☆'
		},
		{
			id: 'dt139',
			title: 'Video Downloader Professional',
			category: 'chrome-extensions',
			description: 'Grab videos easily! Download online videos in various formats for offline viewing.',
			url: 'https://chrome.google.com/webstore/detail/video-downloader-professi/afhcomalholahplbjhnmahkoekoijban',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★★☆'
		},
		{
			id: 'dt140',
			title: 'Vue.js Devtools',
			category: 'chrome-extensions',
			description: 'Debug Vue apps! Inspect components and states with Vue.js DevTools in Chrome.',
			url: 'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★★'
		},
		{
			id: 'dt141',
			title: 'Web Maker',
			category: 'chrome-extensions',
			description: 'Code offline! Web Maker is a fast playground for HTML, CSS, and JS experiments.',
			url: 'https://chrome.google.com/webstore/detail/web-maker/lkfkkhfhhdiflmlohkfmgjajjdjhfmph',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★☆'
		},
		{
			id: 'dt142',
			title: 'Webtime Tracker',
			category: 'chrome-extensions',
			description: 'Track your browsing! Webtime Tracker reveals time spent on websites for productivity.',
			url: 'https://chrome.google.com/webstore/detail/webtime-tracker/ppaojnbjbmgigkonkkblhbbopngjpejp',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg',
			featured: false,
			year: 2017,
			rating: '★★★☆☆'
		},
		{
			id: 'dt143',
			title: 'Zoho Annotator',
			category: 'chrome-extensions',
			description: 'Annotate with ease! Capture, mark up, and share webpages or screenshots.',
			url: 'https://chrome.google.com/webstore/detail/zoho-annotator/hhcknjkmaaeinhdjgimjnophgpbdgfmg',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★☆☆'
		},
		{
			id: 'dt144',
			title: 'Postman',
			category: 'chrome-extensions',
			description: 'API testing made easy! Postman’s Chrome app lets you test and manage APIs on the go.',
			url: 'https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg',
			featured: true,
			year: 2012,
			rating: '★★★★★'
		},
		// Front-End Developer Extensions
		{
			id: 'dt145',
			title: 'WhatFont',
			category: 'chrome-extensions',
			description: 'Identify fonts instantly! WhatFont reveals font families, sizes, and colors with a click, a must-have for front-end designers.',
			url: 'https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184647/pexels-photo-3184647.jpeg',
			featured: true,
			year: 2011,
			rating: '★★★★★'
		},
		{
			id: 'dt146',
			title: 'Save Image as Type',
			category: 'chrome-extensions',
			description: 'Convert images on the fly! Save any web image as PNG, JPG, or WebP with a right-click, perfect for front-end workflows.',
			url: 'https://chrome.google.com/webstore/detail/save-image-as-type/gibjkgfoeaojmgmkobdmphcjkpjpacfe',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★☆'
		},
		{
			id: 'dt147',
			title: 'Mobile Simulator',
			category: 'chrome-extensions',
			description: 'Test responsiveness fast! Mobile Simulator emulates devices to preview your site on phones, tablets, and more.',
			url: 'https://chrome.google.com/webstore/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
			featured: true,
			year: 2018,
			rating: '★★★★☆'
		},
		{
			id: 'dt148',
			title: 'Hoppscotch',
			category: 'api-tools',
			description: 'API testing made snappy! Hoppscotch lets you fire REST, GraphQL, and WebSocket requests right from your browser, no login needed.',
			url: 'https://hoppscotch.io/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
			featured: true,
			year: 2019,
			rating: '★★★★☆'
		},
		{
			id: 'dt149',
			title: 'Apidog',
			category: 'api-tools',
			description: 'Build APIs with ease! Apidog combines design, testing, and docs in one vibrant platform, perfect for solo devs or teams.',
			url: 'https://apidog.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
			featured: true,
			year: 2020,
			rating: '★★★★☆'
		},
		{
			id: 'dt150',
			title: 'Insomnia',
			category: 'api-tools',
			description: 'Snooze through API testing! Insomnia’s sleek design makes REST and GraphQL requests a breeze for devs.',
			url: 'https://insomnia.rest/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★☆'
		},
		{
			id: 'dt151',
			title: 'Swagger UI',
			category: 'api-tools',
			description: 'Visualize your APIs! Swagger UI crafts stunning docs and testbeds for OpenAPI specs with ease.',
			url: 'https://swagger.io/tools/swagger-ui/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: false,
			year: 2011,
			rating: '★★★★☆'
		},
		{
			id: 'dt152',
			title: 'RapidAPI',
			category: 'api-tools',
			description: 'Craft APIs with flair! RapidAPI’s slick macOS interface powers complex requests for pros.',
			url: 'https://rapidapi.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg',
			featured: true,
			year: 2015,
			rating: '★★★★☆'
		},
		{
			id: 'dt153',
			title: 'SoapUI',
			category: 'api-tools',
			description: 'Tough on APIs, easy on you! SoapUI nails REST and SOAP testing with security and load checks.',
			url: 'https://www.soapui.org/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg',
			featured: false,
			year: 2005,
			rating: '★★★☆☆'
		},
		{
			id: 'dt154',
			title: 'Firecamp',
			category: 'api-tools',
			description: 'Your API playground! Firecamp sparks REST, GraphQL, and WebSocket testing with flair.',
			url: 'https://firecamp.io/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg',
			featured: true,
			year: 2019,
			rating: '★★★☆☆'
		},
		{
			id: 'dt155',
			title: 'TestMace',
			category: 'api-tools',
			description: 'Ace your APIs! TestMace simplifies HTTP testing with a clean UI and CI/CD integration.',
			url: 'https://testmace.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181358/pexels-photo-1181358.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★☆☆'
		},
		{
			id: 'dt156',
			title: 'Bruno',
			category: 'api-tools',
			description: 'Light as a feather! Bruno speeds up API testing with a no-fuss, code-friendly vibe.',
			url: 'https://www.usebruno.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
			featured: false,
			year: 2022,
			rating: '★★★☆☆'
		},
		{
			id: 'dt157',
			title: 'Katalon Studio',
			category: 'api-tools',
			description: 'Test APIs like a pro! Katalon Studio automates REST and SOAP checks with zero-code ease.',
			url: 'https://www.katalon.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg',
			featured: true,
			year: 2015,
			rating: '★★★★☆'
		},
		{
			id: 'dt158',
			title: 'Storybook',
			category: 'ui-tools',
			description: 'Craft UI like a maestro! Storybook lets you build and test components in isolation with flair.',
			url: 'https://storybook.js.org/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181468/pexels-photo-1181468.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★☆'
		},
		{
			id: 'dt159',
			title: 'Cypress',
			category: 'testing-tools',
			description: 'Test with confidence! Cypress makes end-to-end testing a breeze for modern web apps.',
			url: 'https://www.cypress.io/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★☆'
		},
		{
			id: 'dt160',
			title: 'Vite',
			category: 'build-tools',
			description: 'Build apps at lightning speed! Vite’s next-gen tooling powers fast dev and production workflows.',
			url: 'https://vitejs.dev/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181679/pexels-photo-1181679.jpeg',
			featured: true,
			year: 2020,
			rating: '★★★★★'
		},
		// API Tools
		{
			id: 'dt16',
			title: 'Postman',
			category: 'api-tools',
			description: 'The API explorer’s best friend! Postman makes testing and managing APIs a breeze with team collaboration galore.',
			url: 'https://www.postman.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg',
			featured: true,
			year: 2012,
			rating: '★★★★★'
		},
		{
			id: 'dt17',
			title: 'Insomnia',
			category: 'api-tools',
			description: 'Sleek and free(ish)! Insomnia is a stylish Postman alternative with a modern vibe for quick API testing.',
			url: 'https://insomnia.rest/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg',
			featured: true,
			year: 2016,
			rating: '★★★★☆'
		},
		{
			id: 'dt18',
			title: 'APIDog',
			category: 'api-tools',
			description: 'A rising star! APIDog blends Postman and Swagger for testing and documenting APIs with tons of potential.',
			url: 'https://www.apidog.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181371/pexels-photo-1181371.jpeg',
			featured: false,
			year: 2022,
			rating: '★★★★☆'
		},
		{
			id: 'dt19',
			title: 'Hoppscotch',
			category: 'api-tools',
			description: 'Light as a feather! Hoppscotch is an open-source, browser-based API tester—free and fun for quick checks!',
			url: 'https://hoppscotch.io/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181373/pexels-photo-1181373.jpeg',
			featured: false,
			year: 2019,
			rating: '★★★☆☆'
		},
		{
			id: 'dt20',
			title: 'Thunder Client',
			category: 'api-tools',
			description: 'Your VS Code API buddy! Thunder Client is a lightweight extension for API testing right in your editor.',
			url: 'https://www.thunderclient.io/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★☆☆'
		},
		// Design Tools
		{
			id: 'dt28',
			title: 'Ideogram',
			category: 'design-tools',
			description: 'Text-to-image magic! Ideogram creates stunning visuals from your words, perfect for designers and creators.',
			url: 'https://ideogram.ai/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★☆'
		},
		{
			id: 'dt29',
			title: 'Leonardo',
			category: 'design-tools',
			description: 'AI-driven design! Leonardo crafts unique images and assets for games, ads, and more with creative control.',
			url: 'https://leonardo.ai/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
			featured: true,
			year: 2022,
			rating: '★★★★☆'
		},
		{
			id: 'dt45',
			title: 'Canva',
			category: 'design-tools',
			description: 'Design for everyone! Canva creates stunning graphics, presentations, and videos with ease.',
			url: 'https://www.canva.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg',
			featured: true,
			year: 2013,
			rating: '★★★★★'
		},
		// Adobe Tools
		{
			id: 'dt47',
			title: 'Adobe Photoshop',
			category: 'design-tools',
			description: 'The leading photo editing tool, used for graphic design, digital painting, and image manipulation. Supports layers, masks, and Creative Cloud integration.',
			url: 'https://www.adobe.com/products/photoshop.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
			featured: true,
			year: 1990,
			rating: '★★★★★'
		},
		{
			id: 'dt48',
			title: 'Adobe Illustrator',
			category: 'design-tools',
			description: 'A vector design powerhouse, ideal for logos, illustrations, and scalable graphics. Supports SVG, PDF, and Adobe ecosystem integration.',
			url: 'https://www.adobe.com/products/illustrator.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
			featured: true,
			year: 1987,
			rating: '★★★★★'
		},
		{
			id: 'dt49',
			title: 'Adobe Premiere Pro',
			category: 'video-tools',
			description: 'Professional video editing software for films and ads. Supports multi-track editing, effects, and After Effects integration.',
			url: 'https://www.adobe.com/products/premiere.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg',
			featured: true,
			year: 1991,
			rating: '★★★★★'
		},
		{
			id: 'dt50',
			title: 'Adobe After Effects',
			category: 'video-tools',
			description: 'A tool for creating visual effects and motion graphics. Perfect for advanced video editing and chroma keying.',
			url: 'https://www.adobe.com/products/aftereffects.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg',
			featured: true,
			year: 1993,
			rating: '★★★★☆'
		},
		{
			id: 'dt51',
			title: 'Adobe InDesign',
			category: 'design-tools',
			description: 'A layout tool for print and digital publishing, like magazines and eBooks. Supports professional typography and layouts.',
			url: 'https://www.adobe.com/products/indesign.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg',
			featured: false,
			year: 1999,
			rating: '★★★★☆'
		},
		{
			id: 'dt52',
			title: 'Adobe Lightroom',
			category: 'design-tools',
			description: 'A photo organization and editing tool for photographers. Supports non-destructive editing and library management.',
			url: 'https://www.adobe.com/products/photoshop-lightroom.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg',
			featured: false,
			year: 2007,
			rating: '★★★★☆'
		},
		{
			id: 'dt53',
			title: 'Adobe Acrobat Pro',
			category: 'productivity',
			description: 'A tool for creating and editing PDFs, supporting digital signatures, interactive forms, and annotations.',
			url: 'https://www.adobe.com/acrobat.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
			featured: false,
			year: 1993,
			rating: '★★★★☆'
		},
		{
			id: 'dt54',
			title: 'Adobe XD',
			category: 'design-tools',
			description: 'A UI/UX design tool for creating interactive prototypes for web and mobile apps.',
			url: 'https://www.adobe.com/products/xd.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg',
			featured: false,
			year: 2016,
			rating: '★★★★☆'
		},
		{
			id: 'dt55',
			title: 'Adobe Animate',
			category: 'design-tools',
			description: 'A tool for creating animations and interactive web content, the successor to Flash.',
			url: 'https://www.adobe.com/products/animate.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg',
			featured: false,
			year: 1996,
			rating: '★★★☆☆'
		},
		{
			id: 'dt56',
			title: 'Adobe Audition',
			category: 'audio-tools',
			description: 'Professional audio editing software for podcasts and music. Supports multi-track recording.',
			url: 'https://www.adobe.com/products/audition.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg',
			featured: false,
			year: 1990,
			rating: '★★★☆☆'
		},
		{
			id: 'dt57',
			title: 'Adobe Dreamweaver',
			category: 'code-editors',
			description: 'A web design and coding tool, supporting HTML, CSS, and visual editing.',
			url: 'https://www.adobe.com/products/dreamweaver.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg',
			featured: false,
			year: 1997,
			rating: '★★★☆☆'
		},
		{
			id: 'dt58',
			title: 'Adobe Bridge',
			category: 'productivity',
			description: 'A tool for managing and organizing digital assets, integrating with other Adobe apps.',
			url: 'https://www.adobe.com/products/bridge.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg',
			featured: false,
			year: 2005,
			rating: '★★★☆☆'
		},
		{
			id: 'dt59',
			title: 'Adobe Character Animator',
			category: 'video-tools',
			description: 'A tool for creating animated characters using motion tracking, ideal for live streaming.',
			url: 'https://www.adobe.com/products/character-animator.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg',
			featured: false,
			year: 2015,
			rating: '★★★☆☆'
		},
		{
			id: 'dt60',
			title: 'Adobe Dimension',
			category: 'design-tools',
			description: 'A 3D design tool for product mockups and ads, beginner-friendly but limited.',
			url: 'https://www.adobe.com/products/dimension.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg',
			featured: false,
			year: 2017,
			rating: '★★★☆☆'
		},
		{
			id: 'dt61',
			title: 'Adobe Fresco',
			category: 'design-tools',
			description: 'A digital drawing app for tablets, supporting realistic live brushes.',
			url: 'https://www.adobe.com/products/fresco.html',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/5971339/pexels-photo-5971339.jpeg',
			featured: false,
			year: 2019,
			rating: '★★★☆☆'
		},
		// Video Tools
		{
			id: 'dt30',
			title: 'inVideo',
			category: 'video-tools',
			description: 'Create videos with ease! inVideo’s AI tools turn ideas into pro-looking videos for any platform.',
			url: 'https://invideo.io/make/ai-video-generator-web/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★☆'
		},
		{
			id: 'dt31',
			title: 'HeyGen',
			category: 'video-tools',
			description: 'Human-like avatars! HeyGen creates realistic video avatars from text, perfect for presentations.',
			url: 'https://www.heygen.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115808/pexels-photo-1115808.jpeg',
			featured: true,
			year: 2020,
			rating: '★★★★☆'
		},
		{
			id: 'dt32',
			title: 'Captions',
			category: 'video-tools',
			description: 'Reels made simple! Captions transforms videos into engaging short-form content with AI editing.',
			url: 'https://www.captions.ai/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1115816/pexels-photo-1115816.jpeg',
			featured: false,
			year: 2021,
			rating: '★★★☆☆'
		},
		{
			id: 'dt33',
			title: 'Klap',
			category: 'video-tools',
			description: 'Shorts for Arabic creators! Klap optimizes videos for TikTok and YouTube with Arabic support.',
			url: 'https://klap.app/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg',
			featured: true,
			year: 2022,
			rating: '★★★★☆'
		},
		// Audio Tools
		{
			id: 'dt34',
			title: 'Intella',
			category: 'audio-tools',
			description: 'Arabic audio to text! Intella transcribes Arabic speech accurately for meetings and interviews.',
			url: 'https://intella.me/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181394/pexels-photo-1181394.jpeg',
			featured: true,
			year: 2021,
			rating: '★★★★☆'
		},
		{
			id: 'dt35',
			title: 'Notta',
			category: 'audio-tools',
			description: 'Speech to text, fast! Notta transcribes audio in multiple languages with real-time notes.',
			url: 'https://www.notta.ai/en/features/ai-transcription',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★☆☆'
		},
		{
			id: 'dt36',
			title: 'ElevenLabs',
			category: 'audio-tools',
			description: 'Text to lifelike speech! ElevenLabs creates natural-sounding voices for audiobooks and more.',
			url: 'https://elevenlabs.io/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
			featured: true,
			year: 2022,
			rating: '★★★★★'
		},
		// Writing Tools
		{
			id: 'dt37',
			title: 'Claude',
			category: 'writing-tools',
			description: 'Your writing buddy! Claude from Anthropic offers safe, helpful text generation and editing.',
			url: 'https://claude.ai/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
			featured: true,
			year: 2023,
			rating: '★★★★☆'
		},
		{
			id: 'dt38',
			title: 'QuillBot',
			category: 'writing-tools',
			description: 'Polish your words! QuillBot paraphrases, summarizes, and checks grammar for better writing.',
			url: 'https://quillbot.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★☆'
		},
		{
			id: 'dt39',
			title: 'Rytr',
			category: 'writing-tools',
			description: 'Content in seconds! Rytr generates blog posts, ads, and emails with AI-driven creativity.',
			url: 'https://rytr.me/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★☆☆'
		},
		{
			id: 'dt40',
			title: 'Wordtune',
			category: 'writing-tools',
			description: 'Write with flair! Wordtune refines sentences to sound clear, engaging, and professional.',
			url: 'https://www.wordtune.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg',
			featured: true,
			year: 2020,
			rating: '★★★★☆'
		},
		{
			id: 'dt41',
			title: 'DeepL',
			category: 'writing-tools',
			description: 'Translate like a pro! DeepL offers accurate translations with a natural tone in many languages.',
			url: 'https://www.deepl.com/en/translator',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg',
			featured: true,
			year: 2017,
			rating: '★★★★★'
		},
		{
			id: 'dt42',
			title: 'Copy.ai',
			category: 'writing-tools',
			description: 'Marketing magic! Copy.ai creates catchy headlines, social posts, and emails with AI.',
			url: 'https://www.copy.ai/tools',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg',
			featured: false,
			year: 2020,
			rating: '★★★☆☆'
		},
		{
			id: 'dt43',
			title: 'Jasper',
			category: 'writing-tools',
			description: 'Content powerhouse! Jasper writes blogs, scripts, and ads with brand-specific tones.',
			url: 'https://www.jasper.ai/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
			featured: true,
			year: 2021,
			rating: '★★★★☆'
		},
		{
			id: 'dt44',
			title: 'Grammarly',
			category: 'writing-tools',
			description: 'Your writing coach! Grammarly checks grammar, tone, and clarity for flawless text.',
			url: 'https://www.grammarly.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg',
			featured: true,
			year: 2009,
			rating: '★★★★★'
		},
		// Productivity Tools
		{
			id: 'dt46',
			title: 'Zapier',
			category: 'productivity',
			description: 'Automate your work! Zapier connects apps to streamline tasks without coding.',
			url: 'https://zapier.com/',
			mediaType: 'image',
			media: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg',
			featured: true,
			year: 2011,
			rating: '★★★★☆'
		}
	],
  "UI Components": [
    // الكل من UI Components (8 عناصر)
    {
      title: "DaisyUI",
      url: "https://daisyui.com",
      category: "UI Components",
      description: "A popular Tailwind CSS plugin offering themeable, pre-styled components with semantic class names for rapid prototyping.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=DaisyUI",
      tags: ["Tailwind", "Themes", "Components"],
      progress: 85,
      lastUpdated: "2025-03-06",
      rating: 4.7,
      stats: { views: 150000, duration: "3h", stars: 15000, components: "50+" }
    },
    {
      title: "Flowbite",
      url: "https://flowbite.com",
      category: "UI Components",
      description: "A comprehensive library with over 600 interactive components, ideal for dashboards and enterprise applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Flowbite",
      tags: ["Tailwind", "Interactive", "Figma"],
      progress: 90,
      lastUpdated: "2024-11-25",
      rating: 4.5,
      stats: { views: 28000, duration: "5h", stars: 2800, components: "600+" }
    },
    {
      title: "HyperUI",
      url: "https://hyperui.dev",
      category: "UI Components",
      description: "A collection of copy-paste components for e-commerce and marketing sites, with a focus on simplicity and aesthetics.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=HyperUI",
      tags: ["E-commerce", "Tailwind", "Marketing"],
      progress: 80,
      lastUpdated: "2024-01-18",
      rating: 4.3,
      stats: { views: 10000, duration: "2h", stars: 1000, components: "42+" }
    },
    {
      title: "Preline UI",
      url: "https://preline.co",
      category: "UI Components",
      description: "Offers over 300 components and 160 starter pages, focusing on accessibility and interactivity for complex applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Preline+UI",
      tags: ["Tailwind", "Accessibility", "Multi-framework"],
      progress: 82,
      lastUpdated: "2024-10-15",
      rating: 4.4,
      stats: { views: 18000, duration: "5h", stars: 1800, components: "300+" }
    },
    {
      title: "Kitwind",
      url: "https://kitwind.io",
      category: "UI Components",
      description: "A lightweight library with basic, customizable components like buttons and headers, ideal for beginners.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Kitwind",
      tags: ["Tailwind", "Beginner", "Lightweight"],
      progress: 70,
      lastUpdated: "2023-12-10",
      rating: 4.0,
      stats: { views: 5000, duration: "1h", stars: 500, components: "20+" }
    },
    {
      title: "Headless UI",
      url: "https://headlessui.dev",
      category: "UI Components",
      description: "Unstyled, accessible components from Tailwind Labs, offering full customization for complex, bespoke UIs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Headless+UI",
      tags: ["Tailwind", "Accessibility", "Custom"],
      progress: 88,
      lastUpdated: "2025-02-14",
      rating: 4.6,
      stats: { views: 120000, duration: "3h", stars: 12000, components: "10+" }
    },
    {
      title: "Mamba UI",
      url: "https://mambaui.com",
      category: "UI Components",
      description: "Modern, lightweight components for landing pages, blogs, and SaaS apps with clean, customizable designs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Mamba+UI",
      tags: ["Tailwind", "SaaS", "Minimal"],
      progress: 75,
      lastUpdated: "2024-09-22",
      rating: 4.2,
      stats: { views: 8000, duration: "2h", stars: 800, components: "25+" }
    },
    {
      title: "Universe IO Forms",
      url: "https://uiverse.io/forms",
      category: "UI Components",
      description: "A collection of customizable, open-source form components designed for seamless integration into web projects.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Universe+IO+Forms",
      tags: ["Forms", "UI", "Open Source"],
      progress: 82,
      lastUpdated: "2025-02-20",
      rating: 4.6,
      stats: { views: 25000, duration: "2h", stars: 2500, components: "20+" }
    },
    // من React Components (1 عنصر)
    {
      title: "ShadCN/UI",
      url: "https://ui.shadcn.com",
      category: "UI Components",
      description: "Highly customizable React components built with Tailwind and Radix UI, perfect for modern, scalable applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=ShadCN/UI",
      tags: ["React", "Tailwind", "Radix"],
      progress: 95,
      lastUpdated: "2025-04-20",
      rating: 4.8,
      stats: { views: 310000, duration: "4h", stars: 31000, components: "30+" }
    }
  ],
  "Animations": [
    {
      title: "Hero UI",
      url: "https://heroui.dev",
      category: "Animations",
      description: "Provides smooth, pre-built animations like transitions and hover effects to enhance Tailwind-based UIs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Hero+UI",
      tags: ["Tailwind", "Animations", "Transitions"],
      progress: 78,
      lastUpdated: "2024-07-30",
      rating: 4.1,
      stats: { views: 6000, duration: "2h", stars: 600, components: "15+" }
    },
    {
      title: "Framer Motion",
      url: "https://framer.com/motion",
      category: "Animations",
      description: "A powerful library for complex, smooth animations in React, seamlessly integrated with Tailwind CSS.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Framer+Motion",
      tags: ["React", "Animations", "Tailwind"],
      progress: 92,
      lastUpdated: "2025-01-10",
      rating: 4.9,
      stats: { views: 220000, duration: "6h", stars: 22000, components: "N/A" }
    },
    {
      title: "Motion One",
      url: "https://motion.dev",
      category: "Animations",
      description: "Lightweight, high-performance animations using the Web Animations API, perfect for Tailwind projects.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Motion+One",
      tags: ["CSS", "JavaScript", "Animations"],
      progress: 80,
      lastUpdated: "2024-12-05",
      rating: 4.3,
      stats: { views: 15000, duration: "3h", stars: 1500, components: "N/A" }
    },
    {
      title: "FormKit AutoAnimate",
      url: "https://auto-animate.formkit.com/",
      category: "Animations",
      description: "A zero-config library for adding smooth animations to web elements, enhancing user interfaces with minimal setup.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=FormKit+AutoAnimate",
      tags: ["Animations", "JavaScript", "UI"],
      progress: 80,
      lastUpdated: "2025-03-10",
      rating: 4.4,
      stats: { views: 15000, duration: "1h", stars: 1500, components: "N/A" }
    }
  ],
  "CSS Tools": [
    {
      title: "Flexbox Labs",
      url: "https://flexboxlabs.netlify.app",
      category: "CSS Tools",
      description: "An interactive learning platform for mastering CSS Flexbox with hands-on exercises and visual examples.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Flexbox+Labs",
      tags: ["CSS", "Flexbox", "Learning"],
      progress: 85,
      lastUpdated: "2024-10-20",
      rating: 4.5,
      stats: { views: 20000, duration: "2h", stars: 2000, components: "N/A" }
    },
    {
      title: "Animated CSS Background Generator",
      url: "https://wweb.dev/resources/animated-css-background-generator",
      category: "CSS Tools",
      description: "A tool for generating customizable animated CSS backgrounds, perfect for adding dynamic visuals to websites.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS+Background+Generator",
      tags: ["CSS", "Animations", "Web Design"],
      progress: 75,
      lastUpdated: "2024-12-15",
      rating: 4.3,
      stats: { views: 10000, duration: "1h", stars: 1000, components: "N/A" }
    }
  ],
  "Web Design": [
    {
      title: "Webflow",
      url: "https://webflow.com",
      category: "Web Design",
      description: "A no-code platform for designing, building, and launching responsive websites with a visual drag-and-drop interface.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Webflow",
      tags: ["No-Code", "Web Design", "Responsive"],
      progress: 90,
      lastUpdated: "2025-04-10",
      rating: 4.8,
      stats: { views: 500000, duration: "5h", stars: 50000, components: "N/A" }
    },
    {
      title: "Framer",
      url: "https://www.framer.com",
      category: "Web Design",
      description: "A prototyping and design tool for creating interactive, high-fidelity web and mobile app prototypes.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Framer",
      tags: ["Prototyping", "Web Design", "Animations"],
      progress: 88,
      lastUpdated: "2025-03-25",
      rating: 4.7,
      stats: { views: 300000, duration: "4h", stars: 30000, components: "N/A" }
    },
    // من WordPress Themes (1 عنصر)
    {
      title: "SolaceWP",
      url: "https://solacewp.com/",
      category: "Web Design",
      description: "A premium WordPress theme offering modern, customizable designs for blogs, portfolios, and business sites.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=SolaceWP",
      tags: ["WordPress", "Themes", "Customizable"],
      progress: 78,
      lastUpdated: "2024-11-30",
      rating: 4.4,
      stats: { views: 12000, duration: "2h", stars: 1200, components: "N/A" }
    },
		{
      title: "Learn Framer in 2025 - Crash Course for Framer Beginners",
      url: "https://www.youtube.com/watch?v=IL2aQ3aWGZk",
      category: "Web Design",
      description: "A crash course on Framer, a no/low-code website builder, converting a Figma design into a responsive, interactive website.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Framer+Course",
      tags: ["Framer", "No-Code", "Web Design"],
      progress: 75,
      lastUpdated: "2025-01-28",
      rating: 4.3,
      stats: { views: 10749, duration: "N/A", stars: 427, components: "N/A" }
    }
  ],
  "Tutorials": [
    // الكل من Tutorials (13 عنصر)
    {
      title: "Realtime Responsive Chat App with React, Node.js, Socket.io and MongoDB with Group Chats",
      url: "https://www.youtube.com/watch?v=W3sOezpkGWI",
      category: "Tutorials",
      description: "A step-by-step tutorial to build a full-stack, responsive chat app with real-time messaging, group chats, and file uploads using MERN stack and Socket.io.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Chat+App+Tutorial",
      tags: ["MERN", "Socket.io", "React", "Node.js"],
      progress: 85,
      lastUpdated: "2024-07-09",
      rating: 4.5,
      stats: { views: 220053, duration: "8h", stars: 5000, components: "N/A" }
    },
    {
      title: "Next.js E-Commerce App Tutorial | Build with React, OneEntry CMS & Tailwind CSS",
      url: "https://www.youtube.com/watch?v=cSweAnEQhMU",
      category: "Tutorials",
      description: "A comprehensive guide to building a full-stack e-commerce website with Next.js 14, OneEntry CMS, and Tailwind CSS, covering authentication, payments, and cart management.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+Tutorial",
      tags: ["Next.js", "E-Commerce", "Tailwind CSS"],
      progress: 80,
      lastUpdated: "2024-09-28",
      rating: 4.3,
      stats: { views: 19306, duration: "N/A", stars: 1000, components: "N/A" }
    },
    {
      title: "MERN Stack Realtime Chat App Tutorial - React.js & Socket.io",
      url: "https://www.youtube.com/watch?v=ntKkVrQqBYY",
      category: "Tutorials",
      description: "A beginner-friendly tutorial to create a real-time chat app using MERN stack, Socket.io, Tailwind CSS, and Daisy UI, with JWT authentication and free deployment.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=MERN+Chat+Tutorial",
      tags: ["MERN", "Socket.io", "React"],
      progress: 87,
      lastUpdated: "2024-11-19",
      rating: 4.6,
      stats: { views: 381342, duration: "N/A", stars: 8000, components: "N/A" }
    },
    {
      title: "Neetcode 150 Course",
      url: "https://www.youtube.com/watch?v=T0u5nwSA0w0",
      category: "Tutorials",
      description: "A comprehensive course covering 150 essential LeetCode problems, focusing on algorithmic patterns for coding interviews.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Neetcode+150",
      tags: ["LeetCode", "Algorithms", "Coding Interview"],
      progress: 88,
      lastUpdated: "2025-01-20",
      rating: 4.7,
      stats: { views: 241839, duration: "38h", stars: 10000, components: "N/A" }
    },
    {
      title: "Dynamic Programming Course",
      url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
      category: "Tutorials",
      description: "A beginner-friendly course on dynamic programming, covering memoization and tabulation techniques for solving algorithmic problems.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Dynamic+Programming",
      tags: ["Dynamic Programming", "Algorithms", "Coding"],
      progress: 85,
      lastUpdated: "2020-12-03",
      rating: 4.6,
      stats: { views: 4478927, duration: "5h", stars: 50000, components: "N/A" }
    },
    {
      title: "10 Common Coding Interview Problems",
      url: "https://www.youtube.com/watch?v=Peq4GCPNC5c",
      category: "Tutorials",
      description: "A tutorial solving 10 common coding interview problems to improve problem-solving skills for competitive programming.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Coding+Interview",
      tags: ["Coding Interview", "Algorithms", "Programming"],
      progress: 80,
      lastUpdated: "2022-01-11",
      rating: 4.4,
      stats: { views: 617030, duration: "2h", stars: 10000, components: "N/A" }
    },
    {
      title: "Inside Code YouTube Channel",
      url: "https://www.youtube.com/channel/UCvLEP7Hu6SHd5a2CWeQXalg",
      category: "Tutorials",
      description: "A YouTube channel offering coding tutorials and problem-solving videos, focusing on algorithms and data structures.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Inside+Code",
      tags: ["Coding", "Algorithms", "Tutorials"],
      progress: 75,
      lastUpdated: "2024-12-01",
      rating: 4.3,
      stats: { views: 39300, duration: "Varies", stars: 2000, components: "N/A" }
    },
    {
      title: "70 LeetCode Problems Tutorial",
      url: "https://www.youtube.com/watch?v=lvO88XxNAzs",
      category: "Tutorials",
      description: "A 5+ hour tutorial covering 70 LeetCode problems across various data structures, designed for tech interview preparation.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=70+LeetCode",
      tags: ["LeetCode", "Algorithms", "Data Structures"],
      progress: 85,
      lastUpdated: "2024-08-31",
      rating: 4.5,
      stats: { views: 761491, duration: "5h", stars: 15000, components: "N/A" }
    },
    {
      title: "8 LeetCode Patterns with Templates",
      url: "https://youtu.be/RYT08CaYq6A?si=2LaMkTn6_TBcDbni",
      category: "Tutorials",
      description: "A tutorial explaining 8 essential LeetCode patterns with code templates for solving algorithmic problems efficiently.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LeetCode+Patterns",
      tags: ["LeetCode", "Algorithms", "Coding Interview"],
      progress: 80,
      lastUpdated: "2024-10-03",
      rating: 4.4,
      stats: { views: 313398, duration: "20m", stars: 5000, components: "N/A" }
    },
    {
      title: "Patient Management System with Next.js",
      url: "https://youtu.be/lEflo_sc82g?feature=shared",
      category: "Tutorials",
      description: "An advanced tutorial to build a healthcare platform with Next.js, Twilio, TypeScript, and Tailwind CSS, focusing on patient registration and SMS notifications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Patient+Management",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      progress: 85,
      lastUpdated: "2024-07-05",
      rating: 4.6,
      stats: { views: 525099, duration: "5h", stars: 10000, components: "N/A" }
    },
    {
      title: "Realtime Next.js App with LiveDocs",
      url: "https://youtu.be/y5vE8y_f_OM?feature=shared",
      category: "Tutorials",
      description: "A tutorial to build a real-time collaborative app like Google Docs using Next.js, TypeScript, and Tailwind CSS with permissions and notifications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LiveDocs+Tutorial",
      tags: ["Next.js", "TypeScript", "Real-time"],
      progress: 83,
      lastUpdated: "2024-07-19",
      rating: 4.5,
      stats: { views: 409737, duration: "3h", stars: 8000, components: "N/A" }
    },
    {
      title: "Real-Time Slack Clone with Next.js",
      url: "https://youtu.be/lXITA5MZIiI?feature=shared",
      category: "Tutorials",
      description: "A 15-hour tutorial to build a full-stack, real-time Slack clone with Next.js, React, Tailwind CSS, and Auth.js, including channels and reactions.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Slack+Clone",
      tags: ["Next.js", "React", "Real-time"],
      progress: 88,
      lastUpdated: "2024-12-01",
      rating: 4.7,
      stats: { views: 100000, duration: "15h", stars: 5000, components: "N/A" }
    },
    {
      title: "Destination FAANG YouTube Channel",
      url: "https://www.youtube.com/@DestinationFAANG",
      category: "Tutorials",
      description: "A YouTube channel offering coding tutorials and interview preparation resources for landing jobs at top tech companies.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Destination+FAANG",
      tags: ["Coding", "Interview Prep", "Tutorials"],
      progress: 70,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 10000, duration: "Varies", stars: 1000, components: "N/A" }
    },
    // من Live Streaming (1 عنصر)
    {
      title: "Twitch - MaxedApps",
      url: "https://www.twitch.tv/maxedapps",
      category: "Tutorials",
      description: "A Twitch channel offering live coding streams, tutorials, and tips for web development, focusing on modern JavaScript frameworks and tools.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Twitch+MaxedApps",
      tags: ["Live Coding", "Web Development", "Tutorials"],
      progress: 70,
      lastUpdated: "2025-04-15",
      rating: 4.2,
      stats: { views: 5000, duration: "Varies", stars: 500, components: "N/A" }
    },
		// New Added
		{
			title: "Build and Deploy a Multi-Vendor E-Commerce Platform",
			url: "https://www.youtube.com/watch?v=6fXNWBFPfRM",
			category: "Tutorials",
			description: "A 20-hour tutorial to build a Gumroad-style platform with Next.js 15, Payload, and Stripe Connect, covering subdomains, product reviews, and more.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+Platform",
			tags: ["Next.js", "E-Commerce", "Stripe"],
			progress: 90,
			lastUpdated: "2025-04-15",
			rating: 4.6,
			stats: { views: 50846, duration: "20h", stars: 2500, components: "N/A" }
		},
		{
			title: "Build Next.js Inventory Management Dashboard & Deploy on AWS",
			url: "https://www.youtube.com/watch?v=ddKQ8sZo_v8",
			category: "Tutorials",
			description: "A step-by-step guide to build a full-stack inventory management dashboard with Next.js, Node.js, and AWS deployment using EC2, RDS, and S3.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Inventory+Dashboard",
			tags: ["Next.js", "AWS", "Node.js"],
			progress: 85,
			lastUpdated: "2024-07-29",
			rating: 4.7,
			stats: { views: 357915, duration: "7h", stars: 10000, components: "N/A" }
		},
		{
			title: "Build and Deploy a Full Stack AI SaaS with Next.js 15",
			url: "https://www.youtube.com/watch?v=ewxUC_zweBg",
			category: "Tutorials",
			description: "A 9-hour course to build an AI SaaS app with Next.js 15, React, Stripe, and Tailwind, transforming PDFs into visual summaries.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=AI+SaaS",
			tags: ["Next.js", "AI", "Stripe"],
			progress: 88,
			lastUpdated: "2025-03-11",
			rating: 4.5,
			stats: { views: 55754, duration: "9h", stars: 2400, components: "N/A" }
		},
		{
			title: "React Native Course for Beginners in 2025",
			url: "https://www.youtube.com/watch?v=f8Z9JyB2EIE",
			category: "Tutorials",
			description: "A crash course to build a mobile movie app with React Native and Expo, covering routing, API integration, and optimization.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Native+App",
			tags: ["React Native", "Expo", "Mobile"],
			progress: 80,
			lastUpdated: "2025-03-07",
			rating: 4.8,
			stats: { views: 570642, duration: "3h", stars: 8200, components: "N/A" }
		},
		{
			title: "Build a Real-Time Slack Clone With Next.js",
			url: "https://www.youtube.com/watch?v=lXITA5MZIiI",
			category: "Tutorials",
			description: "A 15-hour tutorial to build a full-stack Slack clone with Next.js, React, Tailwind, and Auth.js, featuring real-time messaging and roles.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Slack+Clone",
			tags: ["Next.js", "React", "Real-time"],
			progress: 90,
			lastUpdated: "2024-08-25",
			rating: 4.9,
			stats: { views: 1233719, duration: "15h", stars: 11000, components: "N/A" }
		},
		{
			title: "Build and Deploy a Realtime Next.js App with Permissions",
			url: "https://www.youtube.com/watch?v=y5vE8y_f_OM",
			category: "Tutorials",
			description: "A tutorial to build a real-time app like Google Docs with Next.js, TypeScript, and Tailwind, including permissions and notifications.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Realtime+Next.js",
			tags: ["Next.js", "TypeScript", "Real-time"],
			progress: 83,
			lastUpdated: "2024-07-19",
			rating: 4.6,
			stats: { views: 410304, duration: "3h", stars: 7800, components: "N/A" }
		},
		{
			title: "Build and Deploy a Patient Management System with Next.js",
			url: "https://www.youtube.com/watch?v=lEflo_sc82g",
			category: "Tutorials",
			description: "A tutorial to build a healthcare platform with Next.js, Twilio, TypeScript, and Tailwind, focusing on patient registration and SMS notifications.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Patient+Management",
			tags: ["Next.js", "TypeScript", "Healthcare"],
			progress: 85,
			lastUpdated: "2024-07-05",
			rating: "4.7",
			stats: { views: 526260, duration: "5h", stars: 15000, components: "N/A" }
		},
		{
			title: "Build a Students Management System with React",
			url: "https://www.youtube.com/watch?v=pm60lVcAMEw",
			category: "Tutorials",
			description: "A no-talking tutorial to build a CRUD app for student management with React, TypeScript, Redux Toolkit, and React-Bootstrap.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Students+Management",
			tags: ["React", "TypeScript", "CRUD"],
			progress: 70,
			lastUpdated: "2025-02-11",
			rating: 4.0,
			stats: { views: 712, duration: "N/A", stars: 27, components: "N/A" }
		},
  ],
  "Project Playlists": [
    {
      title: "Awesome ReactJS Projects",
      url: "https://www.youtube.com/playlist?list=PLNEhktk_WNzpC3JnwmksayfVEK3qhFc6S",
      category: "Project Playlists",
      description: "A curated playlist of 12 videos showcasing full-stack ReactJS project tutorials to enhance your web development skills.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=ReactJS+Projects",
      tags: ["React", "Projects", "Web Development"],
      progress: 75,
      lastUpdated: "2024-12-01",
      rating: 4.4,
      stats: { views: 50842, duration: "Varies", stars: 2000, components: "N/A" }
    },
    {
      title: "Awesome NextJS Projects",
      url: "https://www.youtube.com/playlist?list=PLNEhktk_WNzrE71OoJhwUDIAKdpIfLXm-",
      category: "Project Playlists",
      description: "A collection of 9 video tutorials for building full-stack projects with Next.js, focusing on modern web development techniques.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=NextJS+Projects",
      tags: ["Next.js", "Projects", "Web Development"],
      progress: 70,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 6940, duration: "Varies", stars: 500, components: "N/A" }
    },
    {
      title: "LeetCode Problems in JavaScript",
      url: "https://youtube.com/playlist?list=PLrClazTqVpJlyey7Szwe_XX9 52 coding interview questions.",
      category: "Project Playlists",
      description: "A playlist of 94 videos solving LeetCode problems in JavaScript, ideal for interview preparation.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LeetCode+JS",
      tags: ["LeetCode", "JavaScript", "Coding Interview"],
      progress: 78,
      lastUpdated: "2024-12-01",
      rating: 4.3,
      stats: { views: 147725, duration: "Varies", stars: 3000, components: "N/A" }
    },
    {
      title: "LeetCode Solutions by Knowledge Center",
      url: "https://youtube.com/playlist?list=PL1w8k37X_6L86f3PUUVFoGYXvZiZHde1S&si=W1VNAWNJD4EghXAZ",
      category: "Project Playlists",
      description: "A collection of 263 videos providing solutions to key LeetCode interview questions.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LeetCode+Solutions",
      tags: ["LeetCode", "Coding Interview", "Algorithms"],
      progress: 82,
      lastUpdated: "2024-12-01",
      rating: 4.5,
      stats: { views: 626632, duration: "Varies", stars: 10000, components: "N/A" }
    },
    {
      title: "LeetCode Solutions in Java",
      url: "https://www.youtube.com/playlist?list=PL_6klLfS1WqF1n0GbPCqk0rPDFAu1dzXC",
      category: "Project Playlists",
      description: "A playlist of 38 videos solving important LeetCode problems in Java for interview preparation.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LeetCode+Java",
      tags: ["LeetCode", "Java", "Coding Interview"],
      progress: 76,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 106111, duration: "Varies", stars: 2000, components: "N/A" }
    },
		{
		  title: "SaaS Next.js Project Playlist",
		  url: "https://youtube.com/playlist?list=PL70PvoZSQSAZ5fuL3BmcYECMcQGWFtt15&feature=shared",
		  category: "Project Playlists",
		  description: "A playlist of 8 videos guiding you through building a SaaS application with Next.js.",
		  image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=SaaS+Next.js",
		  tags: ["Next.js", "SaaS", "Web Development"],
		  progress: 70,
		  lastUpdated: "2024-12-01",
		  rating: 4.1,
		  stats: { views: 39650, duration: "Varies", stars: 1000, components: "N/A" }
		}
    ],
  "Online Courses": [
    // الكل من Online Courses (13 عنصر)
    {
      title: "CS50 Tutorial in Arabic",
      url: "https://www.youtube.com/playlist?list=PLknwEmKsW8OvMsFbU9zo8oJCprAsgc4LO",
      category: "Online Courses",
      description: "A complete Arabic translation of Harvard's CS50 course, covering programming fundamentals with Scratch, Python, C, AI, and cybersecurity.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CS50+Arabic",
      tags: ["CS50", "Programming", "Arabic"],
      progress: 95,
      lastUpdated: "2024-12-01",
      rating: 4.9,
      stats: { views: 6242505, duration: "26h", stars: 50000, components: "N/A" }
    },
    {
      title: "CS50 Arabic by Ghareeb Elshaikh",
      url: "https://youtube.com/playlist?list=PLvGNfY-tFUN_1D3D0WAMlWULl3qnEKHEA&si=SRT_gQKM-XLFVGx3",
      category: "Online Courses",
      description: "An Arabic-translated CS50 course with 12 lessons, teaching programming basics using Scratch, Python, and C, updated for 2024.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CS50+Ghareeb",
      tags: ["CS50", "Programming", "Arabic"],
      progress: 90,
      lastUpdated: "2025-02-01",
      rating: 4.7,
      stats: { views: 10000, duration: "26h", stars: 1000, components: "N/A" }
    },
    {
      title: "CS50x 2025 Lectures",
      url: "https://www.youtube.com/playlist?list=PLhQjrBD2T383q7Vn8QnTsVgSvyLpsqL_R",
      category: "Online Courses",
      description: "Harvard's CS50 2025 course lectures, introducing computer science and programming with C, Python, SQL, HTML, CSS, and JavaScript.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CS50x+2025",
      tags: ["CS50", "Programming", "Computer Science"],
      progress: 92,
      lastUpdated: "2025-01-27",
      rating: 4.8,
      stats: { views: 50000, duration: "26h", stars: 5000, components: "N/A" }
    },
    {
      title: "50+ Hours React.js 19 Monster Class",
      url: "https://youtu.be/M9O5AjEFzKw?si=7BERsJnWPcIIKC5w",
      category: "Online Courses",
      description: "An extensive 50+ hour course covering React.js 19, TypeScript, Framer Motion, Zustand, Redux, and full-stack project development.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Monster+Class",
      tags: ["React", "TypeScript", "Full-stack"],
      progress: 90,
      lastUpdated: "2025-01-20",
      rating: 4.8,
      stats: { views: 403985, duration: "50h", stars: 15000, components: "N/A" }
    },
    {
      title: "Free Git & GitHub Bootcamp",
      url: "https://youtube.com/playlist?list=PL6Mbwnna00j281iF7eHqU_EMXZxEA9G1P&si=N3S1K4xNj8iqG4XK",
      category: "Online Courses",
      description: "A free 5-video bootcamp teaching Git and GitHub essentials for version control and collaboration.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Git+Bootcamp",
      tags: ["Git", "GitHub", "Version Control"],
      progress: 70,
      lastUpdated: "2024-12-01",
      rating: 4.0,
      stats: { views: 666, duration: "Varies", stars: 100, components: "N/A" }
    },
    {
      title: "MERN Stack Course in Arabic",
      url: "https://www.udemy.com/course/yehiatech-react-nodejs-express-mongodb-in-arabic/",
      category: "Online Courses",
      description: "A comprehensive Arabic course on building full-stack web applications with React, Node.js, Express, and MongoDB, including an e-commerce project.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=MERN+Arabic",
      tags: ["MERN", "React", "Node.js", "Arabic"],
      progress: 85,
      lastUpdated: "2024-06-01",
      rating: 4.5,
      stats: { views: 10000, duration: "8h", stars: 1000, components: "N/A" }
    },
    {
      title: "Pro Frontend Engineer ReactJS Course",
      url: "https://www.udemy.com/course/pro-frontend-engineer-reactjs-typescript-redux-nextjs-api-tailwindcss/",
      category: "Online Courses",
      description: "An advanced 62-hour Arabic course on React.js, TypeScript, and Redux, focusing on building modern web applications with best practices.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Pro+Course",
      tags: ["React", "TypeScript", "Redux", "Arabic"],
      progress: 90,
      lastUpdated: "2024-06-04",
      rating: 4.6,
      stats: { views: 15000, duration: "62h", stars: 2000, components: "N/A" }
    },
    {
      title: "Node.js, Nest.js, PostgreSQL, GraphQL, and Security Course in Arabic ⭐",
      url: "https://www.udemy.com/course/mastering-nodejs-ts-mongodb-mvc-apis-graphql-arabic/",
      category: "Online Courses",
      description: "A 39-hour Arabic course mastering Node.js, TypeScript, PostgreSQL, MCV, Express, Nest.js, and GraphQL for building robust server-side applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Node.js+Course",
      tags: ["Node.js", "GraphQL", "TypeScript", "Arabic"],
      progress: 88,
      lastUpdated: "2024-06-01",
      rating: 4.3,
      stats: { views: 12000, duration: "39h", stars: 1500, components: "N/A" }
    },
    {
      title: "WordPress Real Estate Marketing Course",
      url: "https://www.mediafire.com/file/42p8d2rihj8iv5u/%D8%AA%D8%B5%D9%85%D9%8A%D9%85+%D9%85%D9%88%D9%82%D8%B9+%D8%AA%D8%B3%D9%88%D9%8A%D9%82+%D8%B9%D9%82%D8%A7%D8%B1%D9%89.rar/file",
      category: "Online Courses",
      description: "An Arabic course on designing a complete real estate marketing website using WordPress, covering templates, payments, and user experience. `The password for extraction is: @WinDroidPremium.`",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Real+Estate+WP",
      tags: ["WordPress", "Real Estate", "Arabic"],
      progress: 80,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 5000, duration: "N/A", stars: 500, components: "N/A" }
    },
    {
      title: "AI-Powered Cartoon Animation Course",
      url: "https://www.mediafire.com/file/3k8enjnaqgh8xhm/CartoonAI.rar/file",
      category: "Online Courses",
      description: "An Arabic course on creating high-quality cartoon films using AI tools, from idea generation to professional execution. `The password for extraction is: @WinDroidPremium.`",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Cartoon+AI",
      tags: ["AI", "Animation", "Arabic"],
      progress: 75,
      lastUpdated: "2024-12-01",
      rating: 4.1,
      stats: { views: 3000, duration: "N/A", stars: 300, components: "N/A" }
    },
    {
      title: "SEO Step by Step Course",
      url: "https://t.me/+PNLmRGjCtlBkMWY8",
      category: "Online Courses",
      description: "A comprehensive Arabic SEO course by Ahmed Khattab, covering keyword analysis, content optimization, technical SEO, and link-building strategies. `The password for extraction is: @WinDroidPremium.`",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=SEO+Course",
      tags: ["SEO", "Digital Marketing", "Arabic"],
      progress: 85,
      lastUpdated: "2024-12-01",
      rating: 4.4,
      stats: { views: 8000, duration: "12h", stars: 1000, components: "N/A" }
    },
    {
      title: "AI Media Buying Course",
      url: "https://youtube.com/playlist?list=PLxe78bIBB8nVGSQbYw6MLKfWuNQmnjKdh&si=7Aj42ycu-fYwMgg6",
      category: "Online Courses",
      description: "A comprehensive Arabic playlist of 23 videos teaching AI-powered digital marketing and media buying strategies, led by Bassem Magdy.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=AI+Media+Buying",
      tags: ["Digital Marketing", "AI", "Media Buying", "Arabic"],
      progress: 80,
      lastUpdated: "2024-12-01",
      rating: 4.3,
      stats: { views: 68687, duration: "Varies", stars: 1500, components: "N/A" }
    },
    {
      title: "Flux Academy 6 Figure Freelancer",
      url: "https://mega.nz/folder/wbkwCLQQ#vbJVAr30LQHgeYDV_1b7Cg",
      category: "Online Courses",
      description: "A 12-week course by Flux Academy on becoming a successful freelancer, covering business strategies and client management.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Flux+Freelancer",
      tags: ["Freelancing", "Business", "Career"],
      progress: 80,
      lastUpdated: "2024-12-01",
      rating: 4.3,
      stats: { views: 10000, duration: "12 weeks", stars: 1000, components: "N/A" }
    },
    // من Career Resources (1 عنصر)
    {
      title: "Remote Job Platforms",
      url: "https://www.stjegypt.com/article/3519?key=Ngoz9#google_vignette",
      category: "Online Courses",
      description: "A guide to 17 trusted platforms for finding remote part-time or full-time jobs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Remote+Jobs",
      tags: ["Remote Work", "Career", "Job Search"],
      progress: 65,
      lastUpdated: "2024-12-01",
      rating: 4.0,
      stats: { views: 5000, duration: "N/A", stars: 500, components: "N/A" }
    },
	  {
	    title: "Complete Web Development and Programming Guide: From Beginner to Advanced",
	    url: "https://1drv.ms/f/c/f78e4411ca8bad66/EloCM0D1JDpBnLlcJDqKuSQB6CNzf4sMOT8YCYwbQgHM6A",
	    category: "programming",
	    description: "A comprehensive guide covering HTML, CSS, JavaScript, Bootstrap, Tailwind, jQuery, Git, UI/UX, SEO, Clean Code, Java Programming Patterns, Algorithms & Data Structures (LinkedList), LinkedCode Collection, and Productivity Shortcuts.",
	    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
	    // tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "jQuery", "Git", "UI/UX", "SEO", "Clean Code", "Java Program", "Data Structures", "Shortcuts", "LinkedCode Collection"],
			tags: ["Web Development", "Programming Practices", "Design & Optimization", "Productivity"],
	    progress: 90,
	    lastUpdated: "2025-04-01",
	    rating: 4.8,
	    stats: { "views": 1500000, "duration": "50h", "stars": 30000, "components": "+14 topics" }
	  },
		// New Added
		{
			title: "Next.js 15 Animations Masterclass",
			url: "https://www.youtube.com/watch?v=OkWWAgLSGkc",
			category: "Online Courses",
			description: "A masterclass on animations with Next.js 15 and Motion.dev, covering transformations, keyframes, gestures, and scroll animations.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Animations+Masterclass",
			tags: ["Next.js", "Animations", "Motion.dev"],
			progress: 85,
			lastUpdated: "2025-04-09",
			rating: 4.3,
			stats: { views: 13115, duration: "5h", stars: 1000, components: "N/A" }
		},
		{
			title: "Complete React Native Tutorial #1 - Introduction & Setup",
			url: "https://www.youtube.com/watch?v=J2j1yk-34OY",
			category: "Online Courses",
			description: "The first part of a series on React Native and Expo, covering native components, routing, navigation, and authentication.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Native+Course",
			tags: ["React Native", "Expo", "Mobile"],
			progress: 70,
			lastUpdated: "2025-04-09",
			rating: 4.2,
			stats: { views: 22027, duration: "N/A", stars: 768, components: "N/A" }
		},
		{
			title: "Best Way to Create a WordPress Site for Beginners",
			url: "https://www.youtube.com/watch?v=zd5_MN-6kqs",
			category: "Online Courses",
			description: "A beginner-friendly guide to create a WordPress site using a free theme and plugins, with hosting setup.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=WordPress+Beginners",
			tags: ["WordPress", "Beginner", "Web Design"],
			progress: 75,
			lastUpdated: "2024-08-21",
			rating: 4.6,
			stats: { views: 251950, duration: "30m", stars: 4300, components: "N/A" }
		},
		{
			title: "How to Create a Website – WordPress Tutorial for Beginners 2025",
			url: "https://www.youtube.com/watch?v=R4v_7hh4Yys",
			category: "Online Courses",
			description: "A beginner's course on creating a WordPress website, covering domain, hosting, themes, plugins, and customization with Elementor.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=WordPress+Tutorial",
			tags: ["WordPress", "Beginner", "Web Design"],
			progress: 80,
			lastUpdated: "2025-01-21",
			rating: 4.5,
			stats: { views: 110232, duration: "1h", stars: 3000, components: "N/A" }
		},
		{
			title: "Create a Professional E-Commerce Store with WordPress and WooCommerce",
			url: "https://www.youtube.com/watch?v=OSHrVp17syE",
			category: "Online Courses",
			description: "A comprehensive guide to building a professional e-commerce store with WordPress and WooCommerce, covering products, payments, and shipping.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+Store",
			tags: ["WordPress", "WooCommerce", "E-Commerce"],
			progress: 82,
			lastUpdated: "2024-07-10",
			rating: 4.4,
			stats: { views: 12827, duration: "N/A", stars: 424, components: "N/A" }
		},
		{
			title: "Detailed Guide to Create an E-Commerce Store with WordPress",
			url: "https://www.youtube.com/watch?v=sgZtrdcm5eI",
			category: "Online Courses",
			description: "A detailed tutorial on creating an e-commerce store with WordPress using the Flatsome theme, covering products, payments, and customization.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+Guide",
			tags: ["WordPress", "E-Commerce", "Flatsome"],
			progress: 85,
			lastUpdated: "2023-04-24",
			rating: 4.5,
			stats: { views: 99643, duration: "2h", stars: 1800, components: "N/A" }
		},
		{
			title: "WordPress Course: Introduction to WordPress",
			url: "https://www.youtube.com/watch?v=ctEAYHFcbHk",
			category: "Online Courses",
			description: "An introductory course on WordPress, explaining its history, usage, and benefits for web development.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=WordPress+Intro",
			tags: ["WordPress", "Beginner", "Web Development"],
			progress: 70,
			lastUpdated: "2016-10-21",
			rating: 4.8,
			stats: { views: 619274, duration: "N/A", stars: 11000, components: "N/A" }
		},
		{
			title: "Create an E-Commerce Site with WordPress and WooCommerce 2025",
			url: "https://www.youtube.com/watch?v=tZwseQRmlSI",
			category: "Online Courses",
			description: "A 2025 guide to creating a free e-commerce site with WordPress, Elementor, and WooCommerce, including product creation and customization.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=E-Commerce+2025",
			tags: ["WordPress", "WooCommerce", "Elementor"],
			progress: 80,
			lastUpdated: "2024-07-29",
			rating: 4.4,
			stats: { views: 60158, duration: "4h", stars: 1200, components: "N/A" }
		},
		{
			title: "Complete WordPress E-Commerce Course with Payments and Shipping",
			url: "https://www.youtube.com/watch?v=ijUPpN9hwB0",
			category: "Online Courses",
			description: "A complete course on creating a professional WordPress e-commerce store with automated payments and shipping using the XStore theme.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=WordPress+E-Commerce",
			tags: ["WordPress", "E-Commerce", "XStore"],
			progress: 83,
			lastUpdated: "2024-12-05",
			rating: 4.3,
			stats: { views: 23580, duration: "1h", stars: 1000, components: "N/A" }
		},
		{
			title: "Tailwind CSS v4 Full Course 2025",
			url: "https://www.youtube.com/watch?v=6biMWgD6_JY",
			category: "Online Courses",
			description: "A 1-hour course on Tailwind CSS v4, covering utility classes, responsive design, dark mode, and a fitness project.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Tailwind+CSS",
			tags: ["Tailwind CSS", "CSS", "Web Design"],
			progress: 78,
			lastUpdated: "2025-02-21",
			rating: 4.7,
			stats: { views: 782508, duration: "1h", stars: 10000, components: "N/A" }
		},
		{
			title: "Alpine.js Crash Course #11 - Alpine Lifecycle",
			url: "https://www.youtube.com/watch?v=kALOM4xfdnA",
			category: "Online Courses",
			description: "A part of an Alpine.js series, focusing on the lifecycle of Alpine.js for creating dynamic, reactive user interfaces.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Alpine.js",
			tags: ["Alpine.js", "JavaScript", "UI"],
			progress: 65,
			lastUpdated: "2025-02-25",
			rating: 4.0,
			stats: { views: 2692, duration: "N/A", stars: 102, components: "N/A" }
		},
		{
			title: "Ten Habits to Become a Successful Programmer",
			url: "https://www.youtube.com/watch?v=n85WQcehd7E",
			category: "Online Courses",
			description: "A video outlining ten habits to become a successful programmer, with practical tips for career growth.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Programming+Habits",
			tags: ["Programming", "Career", "Tips"],
			progress: 70,
			lastUpdated: "2025-02-19",
			rating: 4.5,
			stats: { views: 68287, duration: "N/A", stars: 5800, components: "N/A" }
		},
		{
			title: "The Biggest React.js Course on the Internet (Part 1)",
			url: "https://www.youtube.com/watch?v=qnwFpjIqsrA",
			category: "Online Courses",
			description: "A comprehensive React.js course covering components, JSX, hooks, state management, and TypeScript with beginner projects.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React.js+Course",
			tags: ["React", "TypeScript", "Hooks"],
			progress: 90,
			lastUpdated: "2024-10-03",
			rating: 4.8,
			stats: { views: 378055, duration: "12h", stars: 16000, components: "N/A" }
		},
		{
			title: "50+ Hours React.js 19 Monster Class",
			url: "https://www.youtube.com/watch?v=M9O5AjEFzKw",
			category: "Online Courses",
			description: "A 50+ hour course on React.js 19, covering hooks, TypeScript, Framer Motion, Redux, and full-stack projects.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=React+Monster+Class",
			tags: ["React", "TypeScript", "Full-stack"],
			progress: 92,
			lastUpdated: "2025-01-20",
			rating: 4.9,
			stats: { views: 410226, duration: "50h", stars: 20000, components: "N/A" }
		},
		{
			title: "From Zero to Full Stack: Master JavaScript",
			url: "https://www.youtube.com/watch?v=H3XIJYEPdus",
			category: "Online Courses",
			description: "A complete course on JavaScript, covering basics, React, Node.js, Express, MongoDB, GSAP animations, and 100+ projects.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Full+Stack+JS",
			tags: ["JavaScript", "React", "Node.js"],
			progress: 95,
			lastUpdated: "2023-08-11",
			rating: 4.9,
			stats: { views: 905479, duration: "15h", stars: 35000, components: "N/A" }
		},
		{
			title: "Node.js Tutorial for Beginners 2025",
			url: "https://www.youtube.com/watch?v=yGl3f0xTl_0",
			category: "Online Courses",
			description: "A step-by-step Node.js tutorial covering server creation, routing, middleware, events, and error handling.",
			image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Node.js+Tutorial",
			tags: ["Node.js", "Backend", "JavaScript"],
			progress: 80,
			lastUpdated: "2025-01-13",
			rating: 4.4,
			stats: { views: 30369, duration: "N/A", stars: 958, components: "N/A" }
		},
  ],
  "Charting Libraries": [
    {
      title: "Chart.js",
      url: "https://www.chartjs.org/",
      category: "Charting Libraries",
      description: "A simple and flexible open-source library for creating interactive 2D charts using HTML5 Canvas. It supports 8 chart types like bar, line, and pie, with seamless animations and responsive design.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Chart.js",
      tags: ["Charting", "HTML5 Canvas", "Responsive"],
      progress: 80,
      lastUpdated: "2025-03-01",
      rating: 4.8,
      stats: { views: 5000000, duration: "2h", stars: 63000, components: "8 chart types" }
    },
    {
      title: "D3.js",
      url: "https://d3js.org/",
      category: "Charting Libraries",
      description: "A powerful JavaScript library for creating bespoke, interactive data visualizations. It manipulates SVG and HTML to render complex charts, treemaps, and force-directed graphs, but has a steep learning curve.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=D3.js",
      tags: ["Data Visualization", "SVG", "Interactive"],
      progress: 90,
      lastUpdated: "2025-01-15",
      rating: 4.9,
      stats: { views: 7000000, duration: "10h", stars: 105000, components: "100+ layouts" }
    },
    {
      title: "Recharts",
      url: "https://recharts.org/",
      category: "Charting Libraries",
      description: "A React-specific library built on D3.js, offering a simple API for creating responsive and customizable charts like line, bar, and pie. Ideal for React developers seeking seamless integration.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Recharts",
      tags: ["React", "Charting", "SVG"],
      progress: 85,
      lastUpdated: "2025-02-20",
      rating: 4.7,
      stats: { views: 2000000, duration: "3h", stars: 21000, components: "15+ chart types" }
    },
    {
      title: "LightningChart JS",
      url: "https://lightningchart.com/",
      category: "Charting Libraries",
      description: "A high-performance charting library using WebGL, capable of rendering over 500 million data points. It supports 100+ chart types, including heatmaps and 3D charts, ideal for scientific and financial applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=LightningChart+JS",
      tags: ["High Performance", "WebGL", "Scientific"],
      progress: 95,
      lastUpdated: "2025-04-09",
      rating: 4.6,
      stats: { views: 500000, duration: "5h", stars: 5000, components: "100+ chart types" }
    },
    {
      title: "FusionCharts",
      url: "https://www.fusioncharts.com/",
      category: "Charting Libraries",
      description: "A feature-rich library offering over 100 chart types, including 3D charts and real-time updates. It’s perfect for business dashboards with extensive customization and cross-platform support.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=FusionCharts",
      tags: ["Charting", "Real-time", "Business"],
      progress: 88,
      lastUpdated: "2025-01-18",
      rating: 4.5,
      stats: { views: 1000000, duration: "4h", stars: 8000, components: "100+ chart types" }
    },
    {
      title: "ApexCharts",
      url: "https://apexcharts.com/",
      category: "Charting Libraries",
      description: "A modern, open-source library known for its ease of use, responsive design, and interactive features. It supports chart types like bar, line, and area, with excellent documentation and live examples.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=ApexCharts",
      tags: ["Charting", "Responsive", "Interactive"],
      progress: 82,
      lastUpdated: "2025-03-07",
      rating: 4.7,
      stats: { views: 1500000, duration: "2h", stars: 14000, components: "20+ chart types" }
    },
    {
      title: "Highcharts",
      url: "https://www.highcharts.com/",
      category: "Charting Libraries",
      description: "A paid library with advanced features like 3D charts, annotations, and event-driven callbacks. It’s highly configurable and ideal for professional applications requiring bullet, funnel, and Gantt charts.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Highcharts",
      tags: ["Charting", "Professional", "3D"],
      progress: 87,
      lastUpdated: "2025-02-01",
      rating: 4.8,
      stats: { views: 2000000, duration: "3h", stars: 10000, components: "50+ chart types" }
    },
    {
      title: "ECharts",
      url: "https://echarts.apache.org/",
      category: "Charting Libraries",
      description: "An open-source library by Apache, offering rich chart types including 3D visualizations. It supports large datasets, internationalization, and progressive rendering for real-time updates.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=ECharts",
      tags: ["Charting", "3D", "Apache"],
      progress: 90,
      lastUpdated: "2025-02-24",
      rating: 4.6,
      stats: { views: 3000000, duration: "4h", stars: 58000, components: "70+ chart types" }
    }
  ],
  "Mapping Libraries": [
    {
      title: "Leaflet.js",
      url: "https://leafletjs.com/",
      category: "Mapping Libraries",
      description: "A lightweight, open-source library for creating simple, interactive maps. It’s mobile-friendly and supports plugins for features like heatmaps and geocoding.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Leaflet.js",
      tags: ["Mapping", "Lightweight", "Interactive"],
      progress: 80,
      lastUpdated: "2025-01-10",
      rating: 4.8,
      stats: { views: 4000000, duration: "2h", stars: 40000, components: "N/A" }
    },
    {
      title: "Mapbox GL JS",
      url: "https://www.mapbox.com/mapbox-gljs",
      category: "Mapping Libraries",
      description: "A WebGL-based library for creating highly customizable maps with 3D rendering, vector tiles, and smooth animations. It’s ideal for modern, stylish mapping applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Mapbox+GL+JS",
      tags: ["Mapping", "WebGL", "3D"],
      progress: 90,
      lastUpdated: "2025-03-15",
      rating: 4.7,
      stats: { views: 2500000, duration: "4h", stars: 7000, components: "N/A" }
    },
    {
      title: "Google Maps JavaScript API",
      url: "https://developers.google.com/maps/documentation/javascript",
      category: "Mapping Libraries",
      description: "A comprehensive mapping solution integrated with Google services like Street View, Directions, and Places. It offers robust features for location-based applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Google+Maps+API",
      tags: ["Mapping", "Google", "Location"],
      progress: 85,
      lastUpdated: "2025-02-01",
      rating: 4.9,
      stats: { views: 10000000, duration: "3h", stars: 15000, components: "N/A" }
    },
    {
      title: "OpenLayers",
      url: "https://openlayers.org/",
      category: "Mapping Libraries",
      description: "A powerful library for creating maps with vector and raster layers. It supports advanced features like projections, GeoJSON, and Web Map Services (WMS).",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=OpenLayers",
      tags: ["Mapping", "Vector", "Advanced"],
      progress: 88,
      lastUpdated: "2025-01-20",
      rating: 4.6,
      stats: { views: 1500000, duration: "5h", stars: 10000, components: "N/A" }
    },
    {
      title: "Deck.gl",
      url: "https://deck.gl/",
      category: "Mapping Libraries",
      description: "A high-performance library for visualizing large-scale 2D and 3D geographic data. Built on WebGL, it’s perfect for rendering complex spatial datasets with animations.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Deck.gl",
      tags: ["Mapping", "3D", "WebGL"],
      progress: 92,
      lastUpdated: "2025-03-01",
      rating: 4.5,
      stats: { views: 800000, duration: "6h", stars: 11000, components: "N/A" }
    },
    {
      title: "MapLibre GL JS",
      url: "https://maplibre.org/",
      category: "Mapping Libraries",
      description: "An open-source fork of Mapbox GL JS, offering customizable maps with WebGL rendering. It’s community-driven and ideal for projects needing free, flexible mapping solutions.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=MapLibre+GL+JS",
      tags: ["Mapping", "WebGL", "Open Source"],
      progress: 87,
      lastUpdated: "2025-04-01",
      rating: 4.4,
      stats: { views: 500000, duration: "4h", stars: 4000, components: "N/A" }
    },
    {
      title: "CesiumJS",
      url: "https://cesium.com/cesiumjs/",
      category: "Mapping Libraries",
      description: "A library for creating 3D globes and maps with advanced geospatial visualization. It supports terrain rendering, 3D tiles, and time-dynamic data for immersive experiences.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CesiumJS",
      tags: ["Mapping", "3D", "Geospatial"],
      progress: 93,
      lastUpdated: "2025-02-15",
      rating: 4.7,
      stats: { views: 600000, duration: "6h", stars: 9000, components: "N/A" }
    }
  ],
  "3D Visualization Libraries": [
    {
      title: "Three.js",
      url: "https://threejs.org/",
      category: "3D Visualization Libraries",
      description: "The most popular library for 3D rendering in the browser using WebGL. It supports GPU-accelerated animations, lighting, and shaders for creating stunning 3D scenes.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Three.js",
      tags: ["3D", "WebGL", "Rendering"],
      progress: 95,
      lastUpdated: "2025-03-10",
      rating: 4.9,
      stats: { views: 8000000, duration: "8h", stars: 98000, components: "N/A" }
    },
    {
      title: "Babylon.js",
      url: "https://www.babylonjs.com/",
      category: "3D Visualization Libraries",
      description: "An advanced game engine and 3D rendering library with WebGL. It offers features like particle systems, physics, and VR support, as seen in recent demos on X for Xbox controllers and chatbots.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Babylon.js",
      tags: ["3D", "Game Engine", "WebGL"],
      progress: 92,
      lastUpdated: "2025-04-26",
      rating: 4.8,
      stats: { views: 3000000, duration: "7h", stars: 22000, components: "N/A" }
    },
    {
      title: "A-Frame",
      url: "https://aframe.io/",
      category: "3D Visualization Libraries",
      description: "A framework for creating 3D and VR experiences using simple HTML syntax. Built on Three.js, it’s ideal for beginners wanting to create immersive web experiences.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=A-Frame",
      tags: ["3D", "VR", "HTML"],
      progress: 80,
      lastUpdated: "2025-01-05",
      rating: 4.5,
      stats: { views: 1000000, duration: "3h", stars: 15000, components: "N/A" }
    },
    {
      title: "X3DOM",
      url: "https://www.x3dom.org/",
      category: "3D Visualization Libraries",
      description: "A library for integrating 3D content into web pages using declarative X3D syntax. It enables seamless 3D rendering without plugins, compatible with modern browsers.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=X3DOM",
      tags: ["3D", "Web Integration", "Declarative"],
      progress: 78,
      lastUpdated: "2024-12-01",
      rating: 4.2,
      stats: { views: 300000, duration: "4h", stars: 2000, components: "N/A" }
    },
    {
      title: "PlayCanvas",
      url: "https://playcanvas.com/",
      category: "3D Visualization Libraries",
      description: "A WebGL-based engine for creating interactive 3D content, including games and visualizations. It offers a cloud-based editor and real-time collaboration features.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=PlayCanvas",
      tags: ["3D", "WebGL", "Interactive"],
      progress: 85,
      lastUpdated: "2025-02-10",
      rating: 4.6,
      stats: { views: 800000, duration: "5h", stars: 9000, components: "N/A" }
    },
    {
      title: "Ammo.js",
      url: "https://github.com/kripken/ammo.js/",
      category: "3D Visualization Libraries",
      description: "A physics engine ported to JavaScript, often used with Three.js to add realistic physics simulations like gravity and collisions to 3D scenes.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Ammo.js",
      tags: ["3D", "Physics", "WebGL"],
      progress: 88,
      lastUpdated: "2024-11-15",
      rating: 4.4,
      stats: { views: 500000, duration: "4h", stars: 6000, components: "N/A" }
    },
    {
      title: "Zdog",
      url: "https://zzz.dog/",
      category: "3D Visualization Libraries",
      description: "A lightweight library for creating pseudo-3D visualizations with a minimalistic, flat design. It’s perfect for simple 3D illustrations and animations.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Zdog",
      tags: ["3D", "Lightweight", "Illustration"],
      progress: 75,
      lastUpdated: "2024-10-01",
      rating: 4.3,
      stats: { views: 400000, duration: "2h", stars: 10000, components: "N/A" }
    }
  ],
  "Graph & Network Visualization Libraries": [
    {
      title: "Cytoscape.js",
      url: "https://js.cytoscape.org/",
      category: "Graph & Network Visualization Libraries",
      description: "A lightweight library for visualizing large networks and graphs. It supports advanced layouts, styling, and interactions for biological and social network analysis.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Cytoscape.js",
      tags: ["Graph", "Network", "Lightweight"],
      progress: 82,
      lastUpdated: "2025-01-25",
      rating: 4.7,
      stats: { views: 1000000, duration: "3h", stars: 9500, components: "N/A" }
    },
    {
      title: "Sigma.js",
      url: "https://www.sigmajs.org/",
      category: "Graph & Network Visualization Libraries",
      description: "A library for rendering graphs, timelines, and hierarchical data using Canvas. It’s optimized for large networks with smooth interactions and custom layouts.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Sigma.js",
      tags: ["Graph", "Network", "Canvas"],
      progress: 80,
      lastUpdated: "2024-12-15",
      rating: 4.4,
      stats: { views: 500000, duration: "3h", stars: 3000, components: "N/A" }
    },
    {
      title: "Vis.js",
      url: "https://visjs.org/",
      category: "Graph & Network Visualization Libraries",
      description: "A versatile library for network visualization, timelines, and 3D graphs. It supports dynamic data and interactive features like zooming and dragging.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Vis.js",
      tags: ["Graph", "Network", "Interactive"],
      progress: 85,
      lastUpdated: "2024-11-01",
      rating: 4.5,
      stats: { views: 800000, duration: "4h", stars: 14000, components: "N/A" }
    },
    {
      title: "Algebra.js",
      url: "https://algebra.js.org/",
      category: "Graph & Network Visualization Libraries",
      description: "A library focused on mathematical graph structures, offering tools to manipulate and visualize algebraic graphs, equations, and expressions.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Algebra.js",
      tags: ["Graph", "Mathematics", "Algebra"],
      progress: 70,
      lastUpdated: "2024-09-01",
      rating: 4.0,
      stats: { views: 200000, duration: "2h", stars: 1000, components: "N/A" }
    },
    {
      title: "Nivo",
      url: "https://nivo.rocks/",
      category: "Graph & Network Visualization Libraries",
      description: "A React-based library for graph and network visualizations, offering responsive components like sankey diagrams and chord charts with a focus on simplicity.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Nivo",
      tags: ["Graph", "React", "Responsive"],
      progress: 83,
      lastUpdated: "2025-03-01",
      rating: 4.6,
      stats: { views: 1200000, duration: "3h", stars: 12000, components: "20+ chart types" }
    },
    {
      title: "G6",
      url: "https://g6.antv.vision/",
      category: "Graph & Network Visualization Libraries",
      description: "A graph visualization library by AntV, designed for complex network analysis. It supports advanced layouts, animations, and interactions for large-scale graphs.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=G6",
      tags: ["Graph", "Network", "Analysis"],
      progress: 88,
      lastUpdated: "2025-02-01",
      rating: 4.5,
      stats: { views: 600000, duration: "5h", stars: 9000, components: "N/A" }
    }
  ],
  "CSS & Web Design Resources": [
    {
      title: "CSS Portal",
      url: "https://www.cssportal.com/",
      category: "CSS & Web Design Resources",
      description: "A comprehensive resource for CSS tools, generators, and HTML/CSS examples to enhance website design. It offers practical solutions for styling and layout creation.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS+Portal",
      tags: ["CSS", "Web Design", "Generators"],
      progress: 80,
      lastUpdated: "2022-04-15",
      rating: 4.5,
      stats: { views: 1000000, duration: "N/A", stars: 5000, components: "50+ tools" }
    },
    {
      title: "Quackit",
      url: "https://www.quackit.com/",
      category: "CSS & Web Design Resources",
      description: "A tutorial platform offering HTML, CSS, and web design guides with practical examples, ideal for beginners and intermediate developers.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Quackit",
      tags: ["CSS", "HTML", "Tutorials"],
      progress: 78,
      lastUpdated: "2024-08-01",
      rating: 4.4,
      stats: { views: 448300, duration: "N/A", stars: 3000, components: "N/A" }
    },
    {
      title: "Dynamic Drive",
      url: "https://www.dynamicdrive.com/",
      category: "CSS & Web Design Resources",
      description: "A resource for CSS scripts, layouts, and web design tools, providing reusable code snippets for dynamic website effects.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Dynamic+Drive",
      tags: ["CSS", "Scripts", "Web Design"],
      progress: 75,
      lastUpdated: "2024-08-01",
      rating: 4.2,
      stats: { views: 20800, duration: "N/A", stars: 1000, components: "100+ scripts" }
    },
    {
      title: "CSS Templates for Free",
      url: "https://www.csstemplatesforfree.com/",
      category: "CSS & Web Design Resources",
      description: "A collection of free CSS templates for web design, offering pre-designed layouts for quick website prototyping.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS+Templates+Free",
      tags: ["CSS", "Templates", "Web Design"],
      progress: 70,
      lastUpdated: "2024-04-01",
      rating: 4.0,
      stats: { views: 534, duration: "N/A", stars: 500, components: "20+ templates" }
    },
    {
      title: "CSS Drive",
      url: "https://www.cssdrive.com/",
      category: "CSS & Web Design Resources",
      description: "A gallery and resource for CSS-based web designs, showcasing examples and providing code snippets for inspiration.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS+Drive",
      tags: ["CSS", "Gallery", "Web Design"],
      progress: 72,
      lastUpdated: "2024-08-01",
      rating: 4.1,
      stats: { views: 11600, duration: "N/A", stars: 800, components: "N/A" }
    },
    {
      title: "W3Schools",
      url: "https://www.w3schools.com/",
      category: "CSS & Web Design Resources",
      description: "A widely-used platform for learning CSS, HTML, and web development with interactive tutorials, examples, and references.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=W3Schools",
      tags: ["CSS", "HTML", "Tutorials"],
      progress: 90,
      lastUpdated: "2025-01-01",
      rating: 4.9,
      stats: { views: 50000000, duration: "N/A", stars: 100000, components: "N/A" }
    },
    {
      title: "CSS-Tricks",
      url: "https://css-tricks.com/",
      category: "CSS & Web Design Resources",
      description: "A popular blog offering CSS tutorials, tips, and tricks, along with in-depth articles on web design and development trends.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=CSS-Tricks",
      tags: ["CSS", "Blog", "Web Design"],
      progress: 88,
      lastUpdated: "2025-03-01",
      rating: 4.8,
      stats: { views: 3000000, duration: "N/A", stars: 25000, components: "N/A" }
    }
  ],
  "Software Design & Refactoring": [
    {
      title: "Refactoring Guru",
      url: "https://refactoring.guru/",
      category: "Software Design & Refactoring",
      description: "A detailed resource for learning refactoring, design patterns, and SOLID principles, with tutorials and code examples in Java, C++, C#, PHP, and Delphi.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Refactoring+Guru",
      tags: ["Refactoring", "Design Patterns", "SOLID"],
      progress: 92,
      lastUpdated: "2025-04-01",
      rating: 4.9,
      stats: { views: 1100000, duration: "N/A", stars: 20000, components: "N/A" }
    },
    {
      title: "SourceMaking",
      url: "https://sourcemaking.com/",
      category: "Software Design & Refactoring",
      description: "A guide to software architecture with articles on design patterns and refactoring, including video tutorials and code examples in multiple languages.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=SourceMaking",
      tags: ["Design Patterns", "Refactoring", "Tutorials"],
      progress: 88,
      lastUpdated: "2024-11-01",
      rating: 4.6,
      stats: { views: 87800, duration: "N/A", stars: 5000, components: "N/A" }
    },
    {
      title: "DotNetFiddle",
      url: "https://dotnetfiddle.net/",
      category: "Software Design & Refactoring",
      description: "An online .NET sandbox for testing and sharing code, with tutorials on .NET technologies and design patterns.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=DotNetFiddle",
      tags: [".NET", "Code Sandbox", "Tutorials"],
      progress: 80,
      lastUpdated: "2024-09-01",
      rating: 4.4,
      stats: { views: 315000, duration: "N/A", stars: 3000, components: "N/A" }
    },
    {
      title: "Code Maze",
      url: "https://code-maze.com/",
      category: "Software Design & Refactoring",
      description: "A tutorial site for C#, .NET, and web development, covering design patterns, SOLID principles, and best practices.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Code+Maze",
      tags: [".NET", "Design Patterns", "Tutorials"],
      progress: 85,
      lastUpdated: "2024-12-01",
      rating: 4.5,
      stats: { views: 334300, duration: "N/A", stars: 4000, components: "N/A" }
    },
    {
      title: "Dot Net Tutorials",
      url: "https://dotnettutorials.net/",
      category: "Software Design & Refactoring",
      description: "A learning platform for .NET technologies like ASP.NET MVC, Web API, and design patterns, with a focus on SOLID principles.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Dot+Net+Tutorials",
      tags: [".NET", "Design Patterns", "SOLID"],
      progress: 87,
      lastUpdated: "2024-12-01",
      rating: 4.6,
      stats: { views: 493800, duration: "N/A", stars: 6000, components: "N/A" }
    },
    {
      title: "DoFactory",
      url: "https://www.dofactory.com/",
      category: "Software Design & Refactoring",
      description: "A resource for design patterns with practical examples in C#, Java, and other languages, focusing on real-world applications.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=DoFactory",
      tags: ["Design Patterns", "Code Examples", "Tutorials"],
      progress: 83,
      lastUpdated: "2024-11-01",
      rating: 4.4,
      stats: { views: 148900, duration: "N/A", stars: 2000, components: "N/A" }
    },
    {
      title: "Patterns.dev",
      url: "https://patterns.dev/",
      category: "Software Design & Refactoring",
      description: "A modern guide to design patterns in JavaScript and web development, offering insights into modular and scalable code practices.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Patterns.dev",
      tags: ["Design Patterns", "JavaScript", "Web Development"],
      progress: 85,
      lastUpdated: "2025-02-01",
      rating: 4.7,
      stats: { views: 500000, duration: "N/A", stars: 8000, components: "N/A" }
    },
    {
      title: "Martin Fowler",
      url: "https://martinfowler.com/",
      category: "Software Design & Refactoring",
      description: "A renowned site by Martin Fowler, offering in-depth articles on refactoring, design patterns, and software architecture principles.",
      image: "https://placehold.co/300x200/FFF/00F?font=Raleway&text=Martin+Fowler",
      tags: ["Refactoring", "Design Patterns", "Architecture"],
      progress: 90,
      lastUpdated: "2025-03-01",
      rating: 4.9,
      stats: { views: 2000000, duration: "N/A", stars: 15000, components: "N/A" }
    }
  ],
}

/**
 * Reorganizes resources into a nested structure based on group and category.
 * @param {Object} resources - The raw resources data.
 * @returns {Object} Reorganized items grouped by main category and subcategory.
 */
function reorganizeItems(resources) {
  const reorganized = {};

  Object.keys(resources).forEach(group => {
    reorganized[group] = {};

    resources[group].forEach(item => {
      const category = item.category || 'Uncategorized';

      if (!reorganized[group][category]) {
        reorganized[group][category] = [];
      }

      const icon = getFavicon(item.url);

      reorganized[group][category].push({
        ...item,
        image: item.image || item.media || 'https://placehold.co/300x200/FFF/000?font=Raleway&text=No+Image',
        icon: icon,
        tags: item.tags || [],
        progress: item.progress || 0,
        lastUpdated: item.lastUpdated || new Date().toISOString().slice(0, 10),
        rating: item.rating || 0,
        stats: item.stats || { views: 0, duration: 'N/A', stars: 0, components: 'N/A' },
        featured: item.featured || false
      });
    });
  });

  return reorganized;
}

/**
 * Generates a favicon URL for a given website URL.
 * @param {string} url - The website URL.
 * @returns {string} The favicon URL or a fallback image.
 */
function getFavicon(url) {
  try {
    const domain = new URL(url).hostname;
		return `https://www.google.com/s2/favicons?domain=${domain}`; // return `https://www.faviconkit.com/icon/${domain}/16`;
  } catch {
    return 'https://placehold.co/16x16/FFF/000?font=Raleway&text=Icon';
  }
}

/**
 * Generates bookmarks HTML with a parent folder for Netscape format.
 * @param {Object} categorizedItems - The categorized items with nested main and subcategories.
 * @returns {string} The bookmarks HTML content.
 */
function generateBookmarksHTML(categorizedItems) {
  let bookmarksHTML = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
    <META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
    <TITLE>Bookmarks</TITLE>
    <H1>Bookmarks</H1>
    <DL>
      <p>
        <DT>
          <H3>FutureHub - Learning Resources</H3>
        <DL>
      <p>
  `;

  Object.keys(categorizedItems).forEach(mainCategory => {
    bookmarksHTML += `        <DT><H3>${mainCategory}</H3>\n`;
    bookmarksHTML += `        <DL><p>\n`;

    Object.keys(categorizedItems[mainCategory]).forEach(subCategory => {
      bookmarksHTML += `            <DT><H3>${subCategory}</H3>\n`;
      bookmarksHTML += `            <DL><p>\n`;

      categorizedItems[mainCategory][subCategory].forEach(item => {
        const addDate = new Date(item.lastUpdated || new Date()).getTime() / 1000;
        const description = item.description.replace(/"/g, '"');
        bookmarksHTML += `                <DT><A HREF="${item.url}" ADD_DATE="${addDate}" LAST_MODIFIED="${addDate}" DESCRIPTION="${description}">${item.title}</A>\n`;
      });

      bookmarksHTML += `            </DL><p>\n`;
    });

    bookmarksHTML += `        </DL><p>\n`;
  });

  bookmarksHTML += `    </DL><p>\n</DL><p>`;
  return bookmarksHTML;
}

/**
 * Triggers the download of the Netscape bookmark HTML file.
 * @param {Object} reorganizedItems - The reorganized items.
 */
async function downloadBookmarks(reorganizedItems) {
  const bookmarksContent = generateBookmarksHTML(reorganizedItems);
  const blob = new Blob([bookmarksContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `bookmarks_${new Date().toISOString().slice(0, 10).replace(/-/g, '_')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Converts a string to a valid HTML ID by replacing spaces with hyphens and converting to lowercase.
 * @param {string} str - The input string.
 * @returns {string} A valid HTML ID.
 */
function toValidId(str) {
  return str
    .replace(/&/g, '-and-') // Replace & with -and-
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9-]/g, ''); // Remove any non-alphanumeric characters except hyphens
}

/**
 * Generates and downloads a ZIP file containing the resources (JSON and index.html).
 * @param {Object} reorganizedItems - The reorganized items.
 */
async function downloadZipBookmarks(reorganizedItems) {
  const zip = new JSZip();
  const rootFolder = zip.folder('FutureHub - Learning Resources');

  // Calculate stats
  let totalItems = 0;
  const categories = Object.keys(reorganizedItems);
  Object.values(reorganizedItems).forEach(category => {
    Object.values(category).forEach(subcategory => {
      totalItems += subcategory.length;
    });
  });

  // Configure layout
  const columns = 2; // Default to 2 columns for balance

  // Create HTML content for the main index page
  let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>FutureHub - Learning Resources</title>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Amiri:wght@400;700&display=swap" rel="stylesheet">
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>
      <style>
        body {
          font-family: 'Inter', 'Amiri', sans-serif;
          background: linear-gradient(135deg, #1a1a2e, #16213e);
          color: #ffffff;
          margin: 0;
          overflow-x: hidden;
          position: relative;
          letter-spacing: 0.02em;
        }
        .geometric-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          opacity: 0.25;
          pointer-events: none;
        }
        .hero {
          background: linear-gradient(to bottom, rgba(0,0,0,0.85), transparent);
          padding: 5rem 2rem;
          text-align: center;
          position: relative;
        }
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #60a5fa;
          border-radius: 50%;
          opacity: 0.7;
          animation: float 10s infinite ease-in-out;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.7; }
          50% { transform: translateY(-20px); opacity: 0.3; }
        }
        .nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          padding: 1rem;
        }
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
					justify-content: center;
					align-items: center;
        }
        .filters {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          padding: 1.25rem;
          border-radius: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }
        .filter-select, .search-input {
          background: linear-gradient(to right, #4f46e5, #a855f7);
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          flex: 1;
          min-width: 200px;
        }
				.filter-select option {
					color: black;
				}
        .tag-chip {
          background: linear-gradient(to right, #06b6d4, #3b82f6);
          color: #fff;
          padding: 0.75rem 1.25rem;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 0.875rem;
          font-weight: 500;
          transition: transform 0.2s ease, background 0.2s ease;
        }
        .tag-chip:hover {
          transform: scale(1.05);
        }
        .tag-chip.active {
          background: #ffffff;
          color: #1a1a2e;
        }
        .clear-filters {
          background: #ef4444;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          transition: transform 0.2s ease;
        }
        .clear-filters:hover {
          transform: scale(1.05);
        }
				#tag-filters {
					justify-content: space-evenly;
				}
        .item {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 1.25rem;
          padding: 1.5rem;
					margin-top: 10px;
					margin-bottom: 10px;
          max-width: 450px;
          min-height: 400px;
          max-height: 550px;
          overflow-y: auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .item:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6), 0 0 25px rgba(59, 130, 246, 0.5);
        }
        .item.featured {
          border: 2px solid transparent;
          background: linear-gradient(to right, #b89d00, #e0c200);
          color: #111827;
        }
        .item.featured p, .item.featured h4 {
          color: #111827;
        }
        .item img {
          max-width: 150px;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
        }
        .progress-bar {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 9999px;
          height: 10px;
          overflow: hidden;
        }
        .progress-fill {
          background: linear-gradient(to right, #22d3ee, #3b82f6);
          height: 100%;
          transition: width 1s ease-in-out;
        }
        .description {
          max-height: 120px;
          overflow: hidden;
          position: relative;
        }
        .description.expanded {
          max-height: none;
        }
        .read-more {
          color: #22d3ee;
          cursor: pointer;
          display: none;
          font-weight: 500;
        }
        .description.long ~ .read-more {
          display: inline;
        }
        .tooltip {
          position: relative;
        }
        .tooltip:hover::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #1a1a2e;
          color: #fff;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          white-space: nowrap;
          z-index: 10;
        }
        [dir="rtl"] {
          text-align: right;
        }
        .loading {
          display: none;
          width: 32px;
          height: 32px;
          border: 4px solid #22d3ee;
          border-top: 4px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        .loading.active {
          display: inline-block;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .empty-state {
          display: none;
          text-align: center;
          color: #9ca3af;
          font-size: 1.25rem;
          margin: 2rem 0;
        }
        .empty-state.active {
          display: block;
        }
        @media (max-width: 768px) {
          .container {
            padding: 1.5rem;
          }
          .item {
            max-width: 100%;
            max-height: 600px;
          }
          .filters {
            flex-direction: column;
            align-items: stretch;
          }
          .filter-select, .search-input, .tag-chip, .clear-filters {
            width: 100%;
            text-align: center;
            min-width: unset;
            padding: 0.75rem;
          }
					.tag-chip {
						width: fit-content;
					}
          .particle {
            width: 3px;
            height: 3px;
          }
        }
      </style>
    </head>
    <body>
      <svg class="geometric-bg">
        <defs>
          <pattern id="pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M40,0 L80,20 L80,60 L40,80 L0,60 L0,20 Z" fill="none" stroke="#60a5fa" stroke-width="1.5"/>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)"/>
      </svg>
      <div class="hero">
        <div class="particles">
          <div class="particle" style="left: 10%; animation-delay: 0s;"></div>
          <div class="particle" style="left: 30%; animation-delay: 2s;"></div>
          <div class="particle" style="left: 50%; animation-delay: 4s;"></div>
          <div class="particle" style="left: 70%; animation-delay: 6s;"></div>
          <div class="particle" style="left: 90%; animation-delay: 8s;"></div>
        </div>
        <h1 class="text-5xl font-extrabold mb-4">FutureHub - Learning Resources</h1>
        <p class="text-xl text-gray-300">Discover Excellence in Learning</p>
      </div>
      <nav class="nav">
        <div class="container flex gap-4 flex-wrap">
					${categories.map(cat => `<a href="#${toValidId(cat)}" class="text-sm text-gray-200 hover:text-white font-medium">${cat}</a>`).join('')}
        </div>
      </nav>
      <div class="container">
        <div class="filters">
          <span class="loading" id="loading"></span>
          <input type="text" id="search" class="search-input" placeholder="Search by title, description, or tags...">
          <select id="category-filter" class="filter-select">
            <option value="">All Categories</option>
            ${categories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
          </select>
					<div class="clear-filters">Clear Filters</div>
          <div id="tag-filters" class="flex gap-2 flex-wrap"></div>
        </div>
        <div class="stats text-gray-200 text-sm mb-4 tooltip" data-tooltip="Total resources and categories" id="stats"></div>
        <div id="content" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-10" style="margin: 40px auto;">
  `;

  // Collect unique tags
  const allTags = new Set();
  Object.values(reorganizedItems).forEach(category => {
    Object.values(category).forEach(subcategory => {
      subcategory.forEach(item => {
        (item.tags || []).forEach(tag => allTags.add(tag));
      });
    });
  });

  Object.keys(reorganizedItems).forEach(mainCategory => {
    const mainFolder = rootFolder.folder(mainCategory);
    // htmlContent += `<div class="category" id="${mainCategory}"><h2 class="text-3xl font-extrabold mb-4" style="margin: 2rem auto 1rem;">${mainCategory}</h2>`;
		htmlContent += `<div class="category" id="${toValidId(mainCategory)}"><h2 class="text-3xl font-extrabold mb-4" style="margin: 2rem auto 1rem;">${mainCategory}</h2>`;

    Object.keys(reorganizedItems[mainCategory]).forEach(subCategory => {
      const subFolder = mainFolder.folder(subCategory);
      const items = reorganizedItems[mainCategory][subCategory];
      subFolder.file(`${subCategory}.json`, JSON.stringify(items, null, 2));
      htmlContent += `<div class="subcategory ml-4"><h3 class="text-xl font-semibold mb-3">${subCategory}</h3>`;

      items.forEach(item => {
        const featuredClass = item.featured ? ' featured' : '';
        const isArabic = /[\u0600-\u06FF]/.test(item.description || item.title);
        const dir = isArabic ? 'dir="rtl"' : '';
        const isLongDescription = (item.description || '').length > 150;
        htmlContent += `
          <div class="item${featuredClass}" ${dir} data-category="${mainCategory}" data-tags="${item.tags.join(',')}">
            <h4 class="text-lg font-semibold flex items-center"><img src="${item.icon}" alt="icon" class="icon w-5 h-5 mr-2">${item.title}</h4>
            <img src="${item.image}" alt="${item.title}" loading="lazy" class="w-full max-w-[150px]">
            <p class="description${isLongDescription ? ' long' : ''}">${item.description}</p>
            <span class="read-more">${isArabic ? 'المزيد' : 'Read More'}</span>
            <p class="mt-2"><a href="${item.url}" target="_blank" class="hover:underline text-cyan-400">Visit Resource</a></p>
            <p class="tags text-sm ${featuredClass ? 'text-gray-800' : 'text-white'}">Tags: ${item.tags.join(', ')}</p>
            <p class="stats-details text-sm ${featuredClass ? 'text-gray-800' : 'text-white'} tooltip" data-tooltip="Views: ${item.stats.views}, Stars: ${item.stats.stars}">Views: ${item.stats.views} | Duration: ${item.stats.duration} | Stars: ${item.stats.stars} | Components: ${item.stats.components}</p>
            <p class="text-sm ${featuredClass ? 'text-gray-800' : 'text-white'}">Rating: ${item.rating} | Last Updated: ${item.lastUpdated}</p>
            <div class="progress-bar mt-2"><div class="progress-fill" style="width: ${item.progress}%"></div></div>
          </div>
        `;
      });

      htmlContent += `</div>`;
    });

    htmlContent += `</div>`;
  });

  htmlContent += `
        </div>
        <div class="empty-state" id="empty-state">No resources match your filters.</div>
      </div>
      <script>
        gsap.registerPlugin(ScrollTrigger);
        document.addEventListener('DOMContentLoaded', () => {
          // Stats
          const stats = document.getElementById('stats');
          stats.textContent = 'Total Items: ${totalItems} | Categories: ${categories.length}';

          // Populate tag filters
          const tagFilters = document.getElementById('tag-filters');
          const tags = ${JSON.stringify([...allTags])};
          tags.forEach(tag => {
            const chip = document.createElement('div');
            chip.className = 'tag-chip';
            chip.textContent = tag;
            chip.dataset.tag = tag;
            tagFilters.appendChild(chip);
          });

          // Filter and search
          const categoryFilter = document.getElementById('category-filter');
          const searchInput = document.getElementById('search');
          const loading = document.getElementById('loading');
          const clearFilters = document.querySelector('.clear-filters');
          const content = document.getElementById('content');
          const emptyState = document.getElementById('empty-state');

          let debounceTimeout;
          function applyFilters() {
            clearTimeout(debounceTimeout);
            loading.classList.add('active');
            debounceTimeout = setTimeout(() => {
              const category = categoryFilter.value;
              const search = searchInput.value.trim().toLowerCase();
              const activeTags = [...document.querySelectorAll('.tag-chip.active')].map(chip => chip.dataset.tag);
              let visibleItems = 0;
              document.querySelectorAll('.item').forEach(card => {
                const cardCategory = card.dataset.category;
                const cardTags = card.dataset.tags.split(',');
                const title = card.querySelector('h4').textContent.toLowerCase();
                const description = card.querySelector('.description').textContent.toLowerCase();
                const tagsMatch = activeTags.length === 0 || activeTags.some(tag => cardTags.includes(tag));
                const show = (!category || cardCategory === category) &&
                            (search === '' || title.includes(search) || description.includes(search) || cardTags.some(tag => tag.toLowerCase().includes(search))) &&
                            tagsMatch;
                card.style.display = show ? 'block' : 'none';
                if (show) visibleItems++;
              });
              emptyState.classList.toggle('active', visibleItems === 0);
              stats.textContent = \`Showing \${visibleItems} of ${totalItems} Items | Categories: ${categories.length}\`;
              loading.classList.remove('active');
            }, 300);
          }

          categoryFilter.addEventListener('change', applyFilters);
          searchInput.addEventListener('input', applyFilters);
          tagFilters.addEventListener('click', e => {
            if (e.target.classList.contains('tag-chip')) {
              e.target.classList.toggle('active');
              applyFilters();
            }
          });
          clearFilters.addEventListener('click', () => {
            categoryFilter.value = '';
            searchInput.value = '';
            document.querySelectorAll('.tag-chip.active').forEach(chip => chip.classList.remove('active'));
            applyFilters();
          });

          // Read more toggle
          document.querySelectorAll('.read-more').forEach(btn => {
            btn.addEventListener('click', () => {
              const description = btn.previousElementSibling;
              description.classList.toggle('expanded');
              const isArabic = /[\u0600-\u06FF]/.test(description.textContent);
              btn.textContent = description.classList.contains('expanded') ?
                (isArabic ? 'عرض أقل' : 'Show Less') :
                (isArabic ? 'المزيد' : 'Read More');
            });
          });

          // Smooth scroll for nav
          document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(e.target.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
          });

          // GSAP Animations
          gsap.from('.item', {
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.15,
            ease: 'power3.out'
          });

          gsap.to('.geometric-bg', {
            y: 120,
            ease: 'none',
            scrollTrigger: {
              trigger: 'body',
              start: 'top top',
              end: 'bottom bottom',
              scrub: true
            }
          });

          // gsap.to('.filter-select, .search-input, .clear-filters', {
          //   scale: 1.02,
          //   repeat: -1,
          //   yoyo: true,
          //   duration: 1.5,
          //   ease: 'sine.inOut'
          // });

          document.querySelectorAll('.item').forEach(item => {
            item.addEventListener('mousemove', e => {
              const rect = item.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              gsap.to(item, {
                rotationY: x / 60,
                rotationX: -y / 60,
                duration: 0.4,
                ease: 'power2.out'
              });
            });
            item.addEventListener('mouseleave', () => {
              gsap.to(item, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.4,
                ease: 'power2.out'
              });
            });
          });
        });
      </script>
    </body>
    </html>
  `;

  rootFolder.file('index.html', htmlContent);
  const content = await zip.generateAsync({ type: 'blob' });
  saveAs(content, 'FutureHub-Learning-Resources.zip');
}

/**
 * Initiates the export process by reorganizing and downloading bookmarks.
 */
async function exportBookmarks() {
  try {
    const categorizedItems = { ...data };
    const reorganizedItems = reorganizeItems(categorizedItems);
    await downloadBookmarks(reorganizedItems);
    await downloadZipBookmarks(reorganizedItems);
  } catch (error) {
    console.error('Error exporting bookmarks:', error);
    alert(`Failed to export bookmarks: ${error.message}`);
  }
}

// Attach event listener to export button
document.getElementById('export-bookmarks').addEventListener('click', exportBookmarks);
