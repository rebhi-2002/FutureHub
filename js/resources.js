// Resources Data
const resources = {
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
};

// Configuration for responsive card display
const CARD_DISPLAY_CONFIG = {
  desktop: { minWidth: 992, itemsPerPage: 15 },
  tablet: { minWidth: 768, itemsPerPage: 12 },
  mobile: { itemsPerPage: 6 },
};

// Global state for pagination and filtering
let currentPage = 0;
let itemsPerPage = determineItemsPerPage();
let currentFilter = 'all';
let searchQuery = '';

/**
 * Determines the number of items to display per page based on screen width.
 * @returns {number} Number of items per page
 */
function determineItemsPerPage() {
  if (window.innerWidth >= CARD_DISPLAY_CONFIG.desktop.minWidth) {
    return CARD_DISPLAY_CONFIG.desktop.itemsPerPage;
  }
  if (window.innerWidth >= CARD_DISPLAY_CONFIG.tablet.minWidth) {
    return CARD_DISPLAY_CONFIG.tablet.itemsPerPage;
  }
  return CARD_DISPLAY_CONFIG.mobile.itemsPerPage;
}

/**
 * Renders resource cards for a given section with infinite scroll and filtering.
 * @param {string} section - Section ID (e.g., 'youtube')
 * @param {Array} items - Array of resource items
 * @param {string} gridId - ID of the grid container
 */
function renderCards(section, items, gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) {
    console.error(`Grid element not found for ID: ${gridId}`);
    return;
  }

  const { filterBar, searchBar, spinner, endMessage, sentinel } = initializeUIElements(section, grid);
  setupBackToTopButton();
  setupSearchBar(searchBar);
  setupFilterButtons(filterBar, grid, sentinel, endMessage);
  setupInfiniteScroll(grid, sentinel, spinner, endMessage, items);

  loadCards(grid, items, currentFilter, searchQuery);
}

/**
 * Initializes UI elements (search bar, spinner, etc.) for the section.
 * @param {string} section - Section ID
 * @param {HTMLElement} grid - Grid container
 * @returns {Object} UI elements
 */
function initializeUIElements(section, grid) {
  const filterBar = document.querySelector(`#${section} .filter-bar`);
  const searchBar = createSearchBar();
  const spinner = createSpinner();
  const endMessage = createEndMessage();
  const sentinel = createSentinel(grid.id);

  if (filterBar && filterBar.parentElement) {
    filterBar.parentElement.insertBefore(searchBar, filterBar);
  } else {
    grid.parentElement.appendChild(searchBar);
  }

  grid.parentElement.append(spinner, endMessage, sentinel);
  return { filterBar, searchBar, spinner, endMessage, sentinel };
}

/**
 * Creates a search bar input element.
 * @returns {HTMLElement} Search bar element
 */
function createSearchBar() {
  const searchBar = document.createElement('input');
  searchBar.classList.add('search-bar');
  searchBar.placeholder = 'Search for channels...';
  return searchBar;
}

/**
 * Creates a loading spinner element.
 * @returns {HTMLElement} Spinner element
 */
function createSpinner() {
  const spinner = document.createElement('div');
  spinner.classList.add('loading-spinner');
  spinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
  return spinner;
}

/**
 * Creates an end-of-content message element.
 * @returns {HTMLElement} End message element
 */
function createEndMessage() {
  const endMessage = document.createElement('div');
  endMessage.classList.add('end-message');
  endMessage.textContent = 'No more cards to show';
  return endMessage;
}

/**
 * Creates a sentinel element for infinite scroll.
 * @param {string} gridId - Grid container ID
 * @returns {HTMLElement} Sentinel element
 */
function createSentinel(gridId) {
  const sentinel = document.createElement('div');
  sentinel.id = `${gridId}-sentinel`;
  sentinel.style.height = '1px';
  return sentinel;
}

/**
 * Sets up the back-to-top button with scroll behavior.
 */
function setupBackToTopButton() {
  const backToTop = document.createElement('button');
  backToTop.classList.add('back-to-top');
  backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(backToTop);

  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 300);
  });
}

/**
 * Sets up the search bar input event listener.
 * @param {HTMLElement} searchBar - Search bar element
 */
function setupSearchBar(searchBar) {
  searchBar.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    currentPage = 0;
    const grid = searchBar.closest('.section').querySelector('.cards-grid');
    grid.innerHTML = '';
    loadCards(grid, resources[searchBar.closest('.section').id], currentFilter, searchQuery);
  });
}

/**
 * Sets up filter buttons for category filtering.
 * @param {HTMLElement} filterBar - Filter bar element
 * @param {HTMLElement} grid - Grid container
 * @param {HTMLElement} sentinel - Sentinel element
 * @param {HTMLElement} endMessage - End message element
 */
function setupFilterButtons(filterBar, grid, sentinel, endMessage) {
  if (!filterBar) return;

  const buttons = filterBar.querySelectorAll('.filter-btn');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      currentPage = 0;
      grid.innerHTML = '';
      sentinel.style.display = 'block';
      endMessage.classList.remove('active');
      loadCards(grid, resources[filterBar.closest('.section').id], currentFilter, searchQuery);
    });
  });
}

/**
 * Sets up infinite scroll with IntersectionObserver.
 * @param {HTMLElement} grid - Grid container
 * @param {HTMLElement} sentinel - Sentinel element
 * @param {HTMLElement} spinner - Spinner element
 * @param {HTMLElement} endMessage - End message element
 * @param {Array} items - Resource items
 */
function setupInfiniteScroll(grid, sentinel, spinner, endMessage, items) {
  let isLoading = false;
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !isLoading) {
        isLoading = true;
        spinner.classList.add('active');
        loadCards(grid, items, currentFilter, searchQuery);
        setTimeout(() => (isLoading = false), 150);
      }
    },
    { threshold: 0.5, rootMargin: '300px' }
  );

  observer.observe(sentinel);
}

/**
 * Loads and renders cards based on filter and search query.
 * @param {HTMLElement} grid - Grid container
 * @param {Array} items - Resource items
 * @param {string} filter - Current filter
 * @param {string} query - Search query
 */
function loadCards(grid, items, filter, query) {
  const filteredItems = filter === 'all'
    ? items.filter((item) => !item.featured)
    : items.filter((item) => !item.featured && item.category === filter);

  const searchedItems = query
    ? filteredItems.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      )
    : filteredItems;

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const newItems = searchedItems.slice(start, end);

  if (newItems.length === 0) {
    grid.nextElementSibling.style.display = 'none'; // Hide sentinel
    grid.parentElement.querySelector('.loading-spinner').classList.remove('active');
    grid.parentElement.querySelector('.end-message').classList.add('active');
    return;
  }

  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
  const cardsHTML = newItems
    .map((item) => {
      const isBookmarked = bookmarks[item.id] ? 'bookmarked' : '';
      return `
        <div class="resource-card" data-category="${item.category}" data-id="${item.id}">
          <div class="card-content">
            ${renderMedia(item)}
            <button class="bookmark-btn ${isBookmarked}"><i class="fas fa-bookmark"></i></button>
            <span class="tag">${item.category}</span>
            <h4>${item.title}</h4>
            ${item.year ? `<span class="year">${item.year}</span>` : ''}
            ${item.rating ? `<span class="rating">${item.rating}</span>` : ''}
          </div>
          <div class="card-details">
            <button class="bookmark-btn ${isBookmarked}"><i class="fas fa-bookmark"></i></button>
            <p>${item.description}</p>
            <a href="${item.url}" class="card-link" target="_blank">Visit</a>
          </div>
        </div>`;
    })
    .join('');

  requestAnimationFrame(() => {
    grid.parentElement.querySelector('.loading-spinner').classList.remove('active');
    grid.insertAdjacentHTML('beforeend', cardsHTML);
    const newCards = grid.querySelectorAll(`.resource-card:nth-last-child(-n+${newItems.length})`);
    newCards.forEach((card, index) => {
      setTimeout(() => card.classList.add('visible'), index * 50);
    });
    currentPage++;
    if (typeof initBookmarks === 'function') {
      initBookmarks();
    } else {
      console.warn('initBookmarks function not found.');
    }
  });
}

/**
 * Renders the media for a card (image, icon, or placeholder).
 * @param {Object} item - Resource item
 * @returns {string} HTML for media
 */
function renderMedia(item) {
  const imagesVisible = localStorage.getItem('imagesVisible') !== 'false';
  if (item.mediaType === 'image' && item.media) {
    return `
      <img src="${item.media}" alt="${item.title}" class="card-media" loading="lazy"
           style="background-color: #f0f0f0; display: ${imagesVisible ? 'block' : 'none'};
                  opacity: ${imagesVisible ? '1' : '0'}; transition: opacity 0.3s ease;">`;
  }
  if (item.mediaType === 'icon' && item.media) {
    return `<i class="${item.media} card-media"></i>`;
  }
  return '<div class="card-media-placeholder" style="background-color: #f0f0f0; height: 150px;"></div>';
}

// Initialize sections on DOM load
document.addEventListener('DOMContentLoaded', () => {
  if (!document.querySelector('.hero')) {
    console.log('Skipping renderCards: Not on index.html');
    return;
  }

  const sections = [
    { id: 'youtube', data: resources.youtube, grid: 'youtube-grid', filter: 'youtube' },
    { id: 'books', data: resources.books, grid: 'books-grid', filter: 'books' },
    { id: 'references', data: resources.references, grid: 'references-grid', filter: 'references' },
    { id: 'images', data: resources.images, grid: 'images-grid', filter: 'images' },
    { id: 'tools', data: resources.tools, grid: 'tools-grid', filter: 'tools' },
    { id: 'devTools', data: resources.devTools, grid: 'devTools-grid', filter: 'devTools' },
  ];

  sections.forEach((section) => {
    if (document.getElementById(section.grid)) {
      renderCards(section.id, section.data || [], section.grid);
    }
  });
});

// Slider Functionality
document.querySelectorAll('.slider-container').forEach((container) => {
  const slider = container.querySelector('.slider');
  const prevBtn = container.querySelector('.slider-prev');
  const nextBtn = container.querySelector('.slider-next');
  const dotsContainer = container.querySelector('.slider-dots');
  const playPauseBtn = container.querySelector('.slider-play-pause');
  let currentIndex = 0;
  let isPlaying = true;
  let autoSlide;

  const messageContainer = createMessageContainer();
  container.appendChild(messageContainer);

  /**
   * Updates the slider with filtered cards.
   * @param {Array} items - Resource items
   * @param {string} filter - Current filter
   */
  function updateSliderCards(items, filter = 'all') {
    const displayItems = filter === 'all'
      ? items.filter((item) => item.featured)
      : items.filter((item) => item.featured && item.category === filter);

    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
    const imagesVisible = localStorage.getItem('imagesVisible') !== 'false';

    slider.innerHTML = displayItems
      .map((item, index) => {
        const isBookmarked = bookmarks[item.id] ? 'bookmarked' : '';
        const cardNumber = String(index + 1).padStart(2, '0');
        return `
          <div class="resource-card" data-category="${item.category}" data-id="${item.id}" style="--index: ${index};">
            <div class="card-number">${cardNumber}</div>
            <div class="card-content">
              ${renderMedia(item)}
              <button class="bookmark-btn ${isBookmarked}"><i class="fas fa-bookmark"></i></button>
              <span class="tag">${item.category}</span>
              <h4>${item.title}</h4>
              ${item.year ? `<span class="year">${item.year}</span>` : ''}
              ${item.rating ? `<span class="rating">${item.rating}</span>` : ''}
            </div>
            <div class="card-details">
              <button class="bookmark-btn ${isBookmarked}"><i class="fas fa-bookmark"></i></button>
              <p>${item.description}</p>
              <a href="${item.url}" class="card-link" target="_blank">Visit</a>
            </div>
          </div>`;
      })
      .join('');

    // Handle empty slider
    if (displayItems.length === 0) {
      showEmptyMessage(filter, messageContainer, slider, container);
    } else {
      slider.style.display = 'flex';
      messageContainer.style.display = 'none';
    }

    updateSlider();
  }

  /**
   * Updates the slider position and UI.
   */
  function updateSlider() {
    const cards = Array.from(slider.querySelectorAll('.resource-card')).filter(
      (card) => card.style.display !== 'none'
    );
    const cardCount = cards.length;
    const cardWidth = 380;
    const cardsPerView = window.innerWidth >= 992 ? 3 : window.innerWidth >= 769 ? 2 : 1;

    currentIndex = Math.min(currentIndex, Math.max(0, cardCount - cardsPerView));
    const offset = -currentIndex * cardWidth;
    gsap.to(slider, { x: offset, duration: 0.5, ease: 'power3.out' });

    cards.forEach((card, index) => {
      card.classList.remove('center');
      if (
        (cardsPerView === 3 && index === currentIndex + 1) ||
        (cardsPerView === 2 && index === currentIndex) ||
        (cardsPerView === 1 && index === currentIndex)
      ) {
        card.classList.add('center');
      }
    });

    updateDots(dotsContainer, cardCount, cardsPerView, currentIndex);
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = cardCount <= cardsPerView || currentIndex >= cardCount - cardsPerView;
    playPauseBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
  }

  /**
   * Updates the slider navigation dots.
   * @param {HTMLElement} dotsContainer - Dots container element
   * @param {number} cardCount - Number of cards
   * @param {number} cardsPerView - Number of cards per view
   * @param {number} currentIndex - Current slider index
   */
  function updateDots(dotsContainer, cardCount, cardsPerView, currentIndex) {
    dotsContainer.innerHTML = '';
    const dotCount = Math.max(1, cardCount - cardsPerView + 1);
    const maxDots = window.innerWidth < 768 ? Math.min(dotCount, 5) : dotCount;

    for (let i = 0; i < maxDots; i++) {
      const dot = document.createElement('div');
      dot.classList.add('slider-dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
      });
      dotsContainer.appendChild(dot);
    }
  }

  /**
   * Starts the auto-slide interval.
   */
  function startAutoSlide() {
    autoSlide = setInterval(() => {
      const cards = Array.from(slider.querySelectorAll('.resource-card')).filter(
        (card) => card.style.display !== 'none'
      );
      const cardsPerView = window.innerWidth >= 992 ? 3 : window.innerWidth >= 769 ? 2 : 1;

      if (cards.length > cardsPerView) {
        currentIndex = currentIndex < cards.length - cardsPerView ? currentIndex + 1 : 0;
        updateSlider();
      }
    }, 3000);
  }

  // Initialize slider
  const section = container.closest('.section').id;
  const sectionItems = resources[section] || [];
  updateSliderCards(sectionItems);

  if (sectionItems.length > 0) {
    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
      }
    });

    nextBtn.addEventListener('click', () => {
      const cards = Array.from(slider.querySelectorAll('.resource-card')).filter(
        (card) => card.style.display !== 'none'
      );
      const cardsPerView = window.innerWidth >= 992 ? 3 : window.innerWidth >= 769 ? 2 : 1;
      if (currentIndex < cards.length - cardsPerView) {
        currentIndex++;
        updateSlider();
      }
    });

    playPauseBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      if (isPlaying) {
        startAutoSlide();
      } else {
        clearInterval(autoSlide);
      }
      updateSlider();
    });

    container.addEventListener('mouseenter', () => {
      if (isPlaying) clearInterval(autoSlide);
    });

    container.addEventListener('mouseleave', () => {
      if (isPlaying) startAutoSlide();
    });

    window.addEventListener('resize', () => {
      currentIndex = 0;
      updateSlider();
    });

    if (isPlaying) startAutoSlide();
  }

  // Filter functionality
  const filterBar = container.closest('.section').querySelector('.filter-bar');
  if (filterBar) {
    const buttons = filterBar.querySelectorAll('.filter-btn');
    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        buttons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        const grid = container.closest('.section').querySelector('.cards-grid');
        const gridCards = grid.querySelectorAll('.resource-card');

        gridCards.forEach((card) => {
          card.style.display = filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
        });

        currentIndex = 0;
        updateSliderCards(sectionItems, filter);
      });
    });
  }
});

// Category styles configuration
const CATEGORY_STYLES = {
  programming: { background: '#e3f2fd', color: '#1565c0', icon: 'fas fa-code' },
  design: { background: '#fce4ec', color: '#ad1457', icon: 'fas fa-paint-brush' },
  'english-learning': { background: '#e8f5e9', color: '#2e7d32', icon: 'fas fa-book-open' },
  productivity: { background: '#fff3e0', color: '#ef6c00', icon: 'fas fa-tasks' },
  'ai-tech': { background: '#ede7f6', color: '#4527a0', icon: 'fas fa-robot' },
  'arabic-programming': { background: '#f1f8e9', color: '#33691e', icon: 'fas fa-laptop-code' },
  'content-creation': { background: '#e0f7fa', color: '#006064', icon: 'fas fa-video' },
  'arabic-education': { background: '#f3e5f5', color: '#6a1b9a', icon: 'fas fa-chalkboard-teacher' },
  education: { background: '#e0f2f1', color: '#00695c', icon: 'fas fa-graduation-cap' },
  references: { background: '#fffde7', color: '#f57f17', icon: 'fas fa-book' },
  'design-tools': { background: '#fff3e0', color: '#ef6c00', icon: 'fas fa-paint-brush' },
  'video-tools': { background: '#e8f5e9', color: '#2e7d32', icon: 'fas fa-video' },
  'audio-tools': { background: '#e3f2fd', color: '#1565c0', icon: 'fas fa-microphone' },
  'writing-tools': { background: '#fce4ec', color: '#ad1457', icon: 'fas fa-pen' },
  images: { background: '#e8eaf6', color: '#283593', icon: 'fas fa-image' },
  'free-images': { background: '#e3f2fd', color: '#1565c0', icon: 'fas fa-camera' },
  'premium-images': { background: '#fce4ec', color: '#ad1457', icon: 'fas fa-dollar-sign' },
  tools: { background: '#efebe9', color: '#4e342e', icon: 'fas fa-tools' },
  trading: { background: '#e8f5e9', color: '#2e7d32', icon: 'fas fa-chart-line' },
  'code-editors': { background: '#e3f2fd', color: '#1565c0', icon: 'fas fa-code' },
  'chrome-extensions': { background: '#e8f5e9', color: '#2e7d32', icon: 'fas fa-puzzle-piece' },
  'ai-tools': { background: '#ede7f6', color: '#4527a0', icon: 'fas fa-robot' },
  'api-tools': { background: '#fffde7', color: '#f57f17', icon: 'fas fa-plug' },
  'ai-websites': { background: '#e0f7fa', color: '#006064', icon: 'fas fa-globe' },
  default: { background: '#f8f9fa', color: '#555', icon: 'fas fa-star' },
};

/**
 * Creates a message container for empty sliders.
 * @returns {HTMLElement} Message container
 */
function createMessageContainer() {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('slider-message');
  return messageContainer;
}

/**
 * Shows a message when no featured cards are available.
 * @param {string} filter - Current filter
 * @param {HTMLElement} messageContainer - Message container
 * @param {HTMLElement} slider - Slider element
 * @param {HTMLElement} container - Slider container
 */
function showEmptyMessage(filter, messageContainer, slider, container) {
  const messages = {
    programming: 'No featured programming cards found, but explore our great resources below!',
    design: 'No featured design cards available, discover other creative options!',
    'english-learning': 'No featured English learning cards, check out our lessons below!',
    productivity: 'No featured productivity cards, but explore our inspiring books below!',
    'ai-tech': 'No featured AI tech cards, try our technical resources!',
    'arabic-programming': 'No featured Arabic programming cards, check out our lessons below!',
    'content-creation': 'No featured content creation cards, discover our tips!',
    'arabic-education': 'No featured Arabic education cards, try our lessons below!',
    education: 'No featured education cards, explore our great resources!',
    references: 'No featured reference cards, check out our sources below!',
    'design-tools': 'No featured design tools right now, explore our creative picks below!',
    'video-tools': 'No featured video tools at the moment, check out our video editing gems below!',
    'audio-tools': 'No featured audio tools currently, discover our sound solutions below!',
    'writing-tools': 'No featured writing tools for now, dive into our smart writing aids below!',
    images: 'No featured image cards, explore our visual resources!',
    tools: 'No featured tool cards, try our awesome tools below!',
    trading: 'No featured trading cards, check out our tips below!',
    'code-editors': 'No featured code editors, explore our great tools below!',
    'chrome-extensions': 'No featured Chrome extensions, try our helpful extensions below!',
    'ai-tools': 'No featured AI tools, check out our amazing tools!',
    'api-tools': 'No featured API tools, try our technical tools below!',
    'ai-websites': 'No featured AI websites, explore our great references!',
    default: 'No featured cards for this category, try another one!',
  };

  slider.style.display = 'none';
  messageContainer.style.display = 'flex';
  const style = CATEGORY_STYLES[filter] || CATEGORY_STYLES.default;
  messageContainer.innerHTML = `
    <div class="message-content">
      <i class="${style.icon} message-icon"></i>
      <p>${messages[filter] || messages.default}</p>
      <button class="message-btn">Show All</button>
    </div>`;
  messageContainer.style.background = style.background;
  messageContainer.style.color = style.color;

  gsap.fromTo(
    messageContainer,
    { opacity: 0, scale: 0.8, rotate: 5 },
    { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: 'back.out(1.7)' }
  );

  const showAllBtn = messageContainer.querySelector('.message-btn');
  showAllBtn.addEventListener('click', () => {
    const filterBar = container.closest('.section').querySelector('.filter-bar');
    const allBtn = filterBar.querySelector('.filter-btn[data-filter="all"]');
    if (allBtn) allBtn.click();
  });
}

// Section visibility animations
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        gsap.from(entry.target, { opacity: 0, y: 50, duration: 0.5, ease: 'power3.out' });
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.section-title').forEach((section) => sectionObserver.observe(section));

// Handle image visibility changes
document.addEventListener('imagesVisibilityChanged', (event) => {
  const imagesVisible = event.detail.imagesVisible;
  document
    .querySelectorAll('.slider .resource-card img.card-media, .cards-grid .resource-card img.card-media')
    .forEach((img) => {
      img.style.display = imagesVisible ? 'block' : 'none';
      img.style.opacity = imagesVisible ? '1' : '0';
    });
});

/**
 * Exports bookmarks as a JSON file.
 */
function exportBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
  if (!Object.keys(bookmarks).length) {
    showModal('No bookmarks to export!', false, 'error');
    return;
  }

  showModal('Do you want to export your bookmarks as a JSON file?', true, 'confirm', () => {
    const dataStr = JSON.stringify(bookmarks, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bookmarks_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showModal('Bookmarks exported successfully!', false, 'success');
  });
}

/**
 * Imports bookmarks from a JSON file.
 * @param {Event} event - File input event
 */
function importBookmarks(event) {
  const file = event.target.files[0];
  if (!file) return;

  if (file.type !== 'application/json') {
    showModal('Please upload a JSON file.', false, 'error');
    return;
  }

  showModal('Do you want to import bookmarks? Existing bookmarks will be preserved.', true, 'confirm', () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importedData = JSON.parse(e.target.result);
        if (!importedData || typeof importedData !== 'object') {
          throw new Error('Invalid JSON file.');
        }

        const existingBookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
        let addedCount = 0;

        Object.keys(importedData).forEach((bookmarkId) => {
          if (!existingBookmarks[bookmarkId]) {
            existingBookmarks[bookmarkId] = true;
            addedCount++;
          }
        });

        if (addedCount === 0) {
          showModal('No new bookmarks were added (possibly duplicates or invalid data).', false, 'error');
          return;
        }

        localStorage.setItem('bookmarks', JSON.stringify(existingBookmarks));
        showModal(`Bookmarks imported successfully! Added ${addedCount} new bookmarks.`, false, 'success');
        window.location.reload();
      } catch (error) {
        showModal(`Error importing bookmarks: ${error.message}`, false, 'error');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
  });
}

/**
 * Displays a modal with a message and optional buttons.
 * @param {string} message - Modal message
 * @param {boolean} showButtons - Show confirm/cancel buttons
 * @param {string} type - Modal type (success, error, confirm)
 * @param {Function} [callback] - Callback for confirm action
 */
function showModal(message, showButtons, type, callback) {
  const modal = document.getElementById('confirmModal');
	if (!modal) {
    // console.error('Modal element with ID "confirmModal" not found in the DOM.');
    // alert(message); // Fallback to alert if modal is missing
    return;
  }
  const modalText = modal.querySelector('p');
  const yesButton = modal.querySelector('.modal-yes');
  const noButton = modal.querySelector('.modal-no');
  const closeButton = modal.querySelector('.modal-close');

  modal.classList.remove('success', 'error', 'confirm');
  modal.classList.add(type);
  modalText.textContent = message;
  yesButton.style.display = showButtons ? 'inline-block' : 'none';
  noButton.style.display = showButtons ? 'inline-block' : 'none';
  modal.style.display = 'block';

  yesButton.onclick = () => {
    modal.style.display = 'none';
    if (callback) callback();
  };

  noButton.onclick = () => {
    modal.style.display = 'none';
  };

  closeButton.onclick = () => {
    modal.style.display = 'none';
  };
}

/**
 * Validates and normalizes resource data.
 */
Object.values(resources).forEach((category, index) => {
  category.forEach((item) => {
    if (!item.thumbnail) {
      item.thumbnail = item.media || 'https://placehold.co/600x300/FFF/F00?font=Raleway&text=Hello+World&';
      // console.warn(`Thumbnail missing for item: ${item.title || 'Unknown'} in category: ${Object.keys(resources)[index]}`);
    }

    if (!item.title) {
      item.title = 'Untitled';
      console.warn(`Title missing for item: ${item.id || 'Unknown'} in category: ${Object.keys(resources)[index]}`);
    }

    if (!item.media_type && item.mediaType) {
      item.media_type = item.mediaType;
    }

    if (!item.media_type) {
      item.media_type = 'image';
      console.warn(`Media type missing for item: ${item.title || 'Unknown'} in category: ${Object.keys(resources)[index]}`);
    }
  });
});

// Expose resources globally
window.resources = resources;
