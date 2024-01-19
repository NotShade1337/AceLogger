let pfp = '{PFP LINK/SOURCE}'
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
        webhook_api_With_token_and_threads_if_required,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: await JSON.stringify({
            username: '{Name}',
            avatar_url: pfp,
            content:
              `# ${dt}`,
            embeds: [
              {
                
                color: {color},
                author: {
                  name: 'LOGGER',
                  url: 'url',
                  icon_url: pfp,
                },
                title: tie,
                url:
                  '{url}';,
                description: `${DiaryStuffLongPARA}`,
                fields: [
                  {
                    name: '{field_name}:',
                    value: bp.join("\n"),
                  }
                ],
                footer: {
                  text: '{footer_text}',
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
