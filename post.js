let pfp = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.ks5ZsJ5JuPM1TzM9pIdslgHaHa%26pid%3DApi&f=1&ipt=1a9b299a37784150b97eedeba0596ce13d28f9dcb22f69e4b02a74e3cfd08471&ipo=images'
let dto = new Date
let dt = dto.toLocaleDateString()

let StuffdonePos = [];
let StuffdonNos = [];

let DiaryStuffLongPARA = "Lorem Ipsum HAHA"
let tie = "Lorem Ipsum"
let bp = []

const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

const q1 = () => {
return new Promise((resolve, reject) => {
    rl.question("Enter About Todays Feelings: ", (ans)=>{
    DiaryStuffLongPARA = ans;
    resolve()
});
})
}

const q2 = () => {
    return new Promise((resolve, reject) => {
        bp.push('```diff')
        rl.write("Enter Bullet Points (Seperate With +/-): \n")
        rl.setPrompt(">>")
        rl.prompt()
        rl.on("line",(pa)=>{
            if (pa.includes("exit")){
                resolve()
            }
            rl.prompt(true)
            if(pa.includes("+")){
                StuffdonePos.push(pa);
            }else if(pa.includes("-")){
                StuffdonNos.push(pa)
            }else{
                console.log("Check The Bullets For + / - It seems you missed one.")
            }
        })  
    })
    }
    
const q3 = () => {
    return new Promise((resolve, reject) => {
        rl.question("Enter Title: ", (ans)=>{
        tie = ans;
        resolve()
    });
    })    
}

function arrange() {
    StuffdonePos.forEach((x) => {
        bp.push(x);
    });
    StuffdonNos.forEach((x) => {
        bp.push(x);
    });
    bp.join("\n");
    bp.push('```');
}
async function post(){
    const res = await fetch(
        'https://discord.com/api/webhooks/1197852550536384603/JfRVfttj7KYjTd_JD1ylxyCqIYQFRuwsxE0oZp9_-bhwYFdIm7lcWTkGKM5jg2r4r8VD?thread_id=1196461571950514286',
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: await JSON.stringify({
            username: 'Portgas D. Ace',
            avatar_url: pfp,
            content:
              `# ${dt}`,
            embeds: [
              {
                
                color: 16742912,
                author: {
                  name: 'LOGGER',
                  url: 'https://www.youtube.com/watch?v=SpZ2FsEfwP4',
                  icon_url: pfp,
                },
                title: tie,
                url:
                  'https://aniwatch.to/one-piece-100',
                description: `${DiaryStuffLongPARA}`,
                fields: [
                  {
                    name: 'Major Stuff Done Today:',
                    value: bp.join("\n"),
                  }
                ],
                footer: {
                  text: 'All The Stars Shine For You',
                },
              },
            ],
          }),
        }
      );
    return res.json();
}


const main = async() => {
    await q3();
    await q1();
    await q2();
    rl.close();
    await arrange();
    await post().then((dat)=> {
        console.log(dat)
    })
    
    
}
main()
