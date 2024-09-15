"use strict";(self.webpackChunklightning_docs=self.webpackChunklightning_docs||[]).push([[5075],{9924:t=>{t.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"Lightning on Youtube","metadata":{"permalink":"/Lightninglib/blog/Lightning on Youtube","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-15-Lightning_series.md","source":"@site/blog/2024-09-15-Lightning_series.md","title":"Lightning On Youtube! \ud83d\udcfd\ufe0f","description":"During the last month, I have been uploading lightning tutorials on my Youtube channel.","date":"2024-09-15T00:00:00.000Z","tags":[{"inline":false,"label":"Lightning","permalink":"/Lightninglib/blog/tags/lightning","description":"Lightning is an easy and powerful PROS template that users can use to program more advanced autonomous routines."},{"inline":false,"label":"Release","permalink":"/Lightninglib/blog/tags/release","description":"Lightning realeses can be found here:https://github.com/HectorAlonso18/Lightninglib/releases"}],"readingTime":0.46,"hasTruncateMarker":false,"authors":[{"name":"H\xe9ctor Alonso","title":"Creator of Lightning","url":"https://github.com/HectorAlonso18","imageURL":"https://media.licdn.com/dms/image/D4E03AQFZP93e5neIjQ/profile-displayphoto-shrink_800_800/0/1710448737433?e=1727913600&v=beta&t=lgB1zRHG5UqgKW0l3ZW5g-QLnf4T-GVv5IdK1RJp_8g","key":"halonso"}],"frontMatter":{"slug":"Lightning on Youtube","title":"Lightning On Youtube! \ud83d\udcfd\ufe0f","authors":["halonso"],"tags":["lightning","release"]},"unlisted":false,"nextItem":{"title":"v1.1.0 is here!\ud83d\udcaa","permalink":"/Lightninglib/blog/Lightning v1.1.0"}},"content":"During the last month, I have been uploading lightning tutorials on my Youtube channel. \\r\\n\\r\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/2JI5_sda7eE?si=fNyVJdByYOnhB5qe\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" referrerpolicy=\\"strict-origin-when-cross-origin\\" allowfullscreen></iframe>\\r\\n\\r\\nIn this brand-new series, I will show you the lightning fundamentals,installation, upgrading,tutorials, and tips.  \\r\\n\\r\\nThe objetive of this Youtube series is to provide a more dynamic resource. However, It is recommended to complement the video tutorials with the written documentation. \\r\\n\\r\\nAdditionally, I recommend you to check it out my [Youtube Channel](https://youtube.com/@alonsoibarrahector8773?si=tVnZo6VtZinRvJFV). I usually upload VEX tutorials outside of the Lightning tutorials."},{"id":"Lightning v1.1.0","metadata":{"permalink":"/Lightninglib/blog/Lightning v1.1.0","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-09-15-Lightning_v1.1.0_is_here.md","source":"@site/blog/2024-09-15-Lightning_v1.1.0_is_here.md","title":"v1.1.0 is here!\ud83d\udcaa","description":"I am thrilled to announce that the first content version of lightning is out.","date":"2024-09-15T00:00:00.000Z","tags":[{"inline":false,"label":"Lightning","permalink":"/Lightninglib/blog/tags/lightning","description":"Lightning is an easy and powerful PROS template that users can use to program more advanced autonomous routines."},{"inline":false,"label":"Release","permalink":"/Lightninglib/blog/tags/release","description":"Lightning realeses can be found here:https://github.com/HectorAlonso18/Lightninglib/releases"}],"readingTime":0.92,"hasTruncateMarker":false,"authors":[{"name":"H\xe9ctor Alonso","title":"Creator of Lightning","url":"https://github.com/HectorAlonso18","imageURL":"https://media.licdn.com/dms/image/D4E03AQFZP93e5neIjQ/profile-displayphoto-shrink_800_800/0/1710448737433?e=1727913600&v=beta&t=lgB1zRHG5UqgKW0l3ZW5g-QLnf4T-GVv5IdK1RJp_8g","key":"halonso"}],"frontMatter":{"slug":"Lightning v1.1.0","title":"v1.1.0 is here!\ud83d\udcaa","authors":["halonso"],"tags":["lightning","release"]},"unlisted":false,"prevItem":{"title":"Lightning On Youtube! \ud83d\udcfd\ufe0f","permalink":"/Lightninglib/blog/Lightning on Youtube"},"nextItem":{"title":"Lightning is out!\ud83e\udd73","permalink":"/Lightninglib/blog/Lightningout"}},"content":"I am thrilled to announce that the first content version of lightning is out. \\r\\n\\r\\nThe ``v1.1.0`` adds new functions for chassis motion and a new brand arcade configuration.\\r\\n\\r\\n---\\r\\n\\r\\n# What is new? \\r\\n\\r\\n* **Added new arcade configuration \ud83d\udd79\ufe0f (```E_TANK_OP_ARCADE_DOUBLE_ALTERNATIVE```)**\\r\\n With this configuration now you can control de forward/backward movements using the right stick and control the turns using the left stick\\r\\n\\r\\n* **New overloads for motion functions \ud83c\udfce\ufe0f**\\r\\n  * ``move_velocity(const int left_rpm, const int right_rpm)``\\r\\n  *  ``move_voltage(const int left_voltage_mv, const int right_voltage_mv)``\\r\\n  *  ``move(const int left_voltage, const int right_voltage)``\\r\\n  \\r\\n  Now it is possible to control each side of the drive train. In previous versions you were just able to control the entire drive train.\\r\\n\\r\\n---\\r\\n# Sounds great, how can i start coding? \ud83d\ude33\\r\\nGreat! just dowloand the example project [here](https://github.com/HectorAlonso18/Lightninglib/releases/tag/v1.1.0). \\r\\n\\r\\n---\\r\\n\\r\\n# How can i upgrade my lightning project ? \\r\\nEasy, just follow these steps: \\r\\n1. Download the zip file ``lightninglib@1.1.0.zip``\\r\\n2. Go to the PROS terminal in your project\\r\\n3. Execute this command: ``pros conduct fetch lightninglib@1.1.0.zip``\\r\\n4. Then execute: ``pros conduct apply lightninglib``\\r\\n5. There you go! Start coding \ud83d\ude00"},{"id":"Lightningout","metadata":{"permalink":"/Lightninglib/blog/Lightningout","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-31-Lightning_out.md","source":"@site/blog/2024-07-31-Lightning_out.md","title":"Lightning is out!\ud83e\udd73","description":"I am excited to announce that Lightning is finally out! After a year of hard work and dedication, Lightning is now available for everyone. I\u2019ve put in countless hours to bring you a powerful and versatile tool, and i can\'t wait for you to start using it.","date":"2024-07-31T00:00:00.000Z","tags":[{"inline":false,"label":"Lightning","permalink":"/Lightninglib/blog/tags/lightning","description":"Lightning is an easy and powerful PROS template that users can use to program more advanced autonomous routines."},{"inline":false,"label":"Release","permalink":"/Lightninglib/blog/tags/release","description":"Lightning realeses can be found here:https://github.com/HectorAlonso18/Lightninglib/releases"}],"readingTime":1.88,"hasTruncateMarker":false,"authors":[{"name":"H\xe9ctor Alonso","title":"Creator of Lightning","url":"https://github.com/HectorAlonso18","imageURL":"https://media.licdn.com/dms/image/D4E03AQFZP93e5neIjQ/profile-displayphoto-shrink_800_800/0/1710448737433?e=1727913600&v=beta&t=lgB1zRHG5UqgKW0l3ZW5g-QLnf4T-GVv5IdK1RJp_8g","key":"halonso"}],"frontMatter":{"slug":"Lightningout","title":"Lightning is out!\ud83e\udd73","authors":["halonso"],"tags":["lightning","release"]},"unlisted":false,"prevItem":{"title":"v1.1.0 is here!\ud83d\udcaa","permalink":"/Lightninglib/blog/Lightning v1.1.0"},"nextItem":{"title":"Welcome","permalink":"/Lightninglib/blog/welcome"}},"content":"I am excited to announce that Lightning is finally out! After a year of hard work and dedication, Lightning is now available for everyone. I\u2019ve put in countless hours to bring you a powerful and versatile tool, and i can\'t wait for you to start using it.\\r\\n\\r\\nI want to thank my team, ``ITESM1``, for giving me the opportunity to test and create ``Lightning``. I also want to extend my gratitude to my great friend [Kevin Giovanni de Le\xf3n P\xe9rez](https://www.linkedin.com/in/kevindeleon97/) for teaching me VEX programming during my freshman years, and to [Leticia Siller](https://www.linkedin.com/in/leticia-siller-a0a14428a/) for helping me with the Lightning artwork.\\r\\n\\r\\nA special thanks goes to the VEX community, and especially to the development teams behind  [EZ-Template](https://ez-robotics.github.io/EZ-Template/) , [JAR Template](https://jacksonarearobotics.github.io/JAR-Template/), [ryanlib](https://github.com/Ryan4253/ryanlib/tree/main), [Okapilib](https://github.com/OkapiLib/OkapiLib), [Lemlib](https://github.com/LemLib/LemLib/tree/master) for providing incredible VEX open source projects that served as invaluable resources.\\r\\n\\r\\n![Lightning-social-card](/img/Lightning_social_card.png)\\r\\n\\r\\n##  Lightning\\r\\n``Lightning`` is an easy and powerful PROS template that users can use to program more advanced autonomous routines using PID controllers, multitasking, drive train functions, odometry, motion profiles, pure pursuit, etc.\\r\\n\\r\\nThe template was initially created for [ITESM Teams](https://www.instagram.com/tec_robotics/) and was inspired by other incredible templates such as:\\r\\n\\r\\n* [EZ-template](https://github.com/EZ-Robotics/EZ-Template?tab=readme-ov-file)\\r\\n* [JAR-template](https://github.com/JacksonAreaRobotics/JAR-Template)\\r\\n* [OkapiLib](https://github.com/OkapiLib/OkapiLib)\\r\\n* [LemLib](https://github.com/LemLib/LemLib/blob/master/README.md?plain=1)\\r\\n* [ryanlib](https://github.com/Ryan4253/ryanlib)\\r\\n\\r\\nWith this project, I had the opportunity to learn different topics related to programming and software development.\\r\\n\\r\\nThis project could not exist without the support of the VEX community. I hope this library can help many programmers around! \ud83d\ude09\\r\\n\\r\\n---\\r\\n## Features\\r\\n* TankDrive support.\\r\\n* Odometry class\\r\\n* Generic PID class.\\r\\n* Generic FeedForward class.\\r\\n* Pure pursuit.\\r\\n* Path planning and Motion profile. \\r\\n* Multitasking. \\r\\n* Different Math functions. \\r\\n---\\r\\n\\r\\n## Python utilities \ud83d\udc0d\\r\\n``Lightning`` has different python utilities to maximize the user experience.\\r\\n\\r\\n* LightningPlanner: Plan your autonomous routes without the necessity of physical measurements.  \\r\\n\\r\\n---\\r\\n\\r\\n## Lightning Demostration\\r\\nIn the following YouTube videos, you can appreciate the results of using Lightning in both testing and competition scenarios. \\r\\n\\r\\n* [Pure Pursuit testing](https://www.youtube.com/watch?v=6EuZdJf89HI)\\r\\n* [Trapezoidal Profile](https://www.youtube.com/watch?v=WZaXgi8o368)\\r\\n* [ITESM1 OVER UNDER Worlds Autonomous Routine](https://www.youtube.com/watch?v=hosBW9l6dMY)\\r\\n* [ITESM1 OVER UNDER Worlds Q-F autonomous](https://youtu.be/sDA6RqO024Y)\\r\\n* [ITESM1 OVER UNDER Worlds QUAL autonomous](https://www.youtube.com/watch?v=LpFiJdZ04_4)\\r\\n\\r\\n---\\r\\n## Future work\\r\\nWe working to introduce more features to lightning! and also creating the documentation page where you could see all the documentation that you need to use lightning. \\r\\n\\r\\n---"},{"id":"welcome","metadata":{"permalink":"/Lightninglib/blog/welcome","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-30-welcome/index.md","source":"@site/blog/2024-07-30-welcome/index.md","title":"Welcome","description":"Welcome to the official Lightning blog. In this blog, we will announce new releases, share tutorials, report bugs, provide information on bug fixes, and much more. Stay tuned for updates and tips on how to make the most out of Lightning!","date":"2024-07-30T00:00:00.000Z","tags":[{"inline":false,"label":"Lightning","permalink":"/Lightninglib/blog/tags/lightning","description":"Lightning is an easy and powerful PROS template that users can use to program more advanced autonomous routines."}],"readingTime":0.215,"hasTruncateMarker":false,"authors":[{"name":"H\xe9ctor Alonso","title":"Creator of Lightning","url":"https://github.com/HectorAlonso18","imageURL":"https://media.licdn.com/dms/image/D4E03AQFZP93e5neIjQ/profile-displayphoto-shrink_800_800/0/1710448737433?e=1727913600&v=beta&t=lgB1zRHG5UqgKW0l3ZW5g-QLnf4T-GVv5IdK1RJp_8g","key":"halonso"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["halonso"],"tags":["lightning"]},"unlisted":false,"prevItem":{"title":"Lightning is out!\ud83e\udd73","permalink":"/Lightninglib/blog/Lightningout"}},"content":"Welcome to the official Lightning blog. In this blog, we will announce new releases, share tutorials, report bugs, provide information on bug fixes, and much more. Stay tuned for updates and tips on how to make the most out of Lightning!\\r\\n\\r\\n![Docusaurus Plushie](./lightning_banner_welcome.jpg)"}]}}')}}]);