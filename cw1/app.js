const fs = require('fs');
const path = require('path');

// 1. Спробуйте створити якийсь файл txt, прочитайте з нього дані і одразу,
// дані які ви отримали запишіть їх в інший файл, в вас вийде невеликий
// callback hell, пізніше я вам покажу як можна це обійти, але поки зробіть так

// fs.writeFile(path.join(__dirname, 'file.txt'),
//     'Data', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         fs.readFile(path.join(__dirname, 'file.txt'), (err, data) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             fs.writeFile(path.join(__dirname, 'newFile.txt'),
//                 `${data}`, (err) => {
//                     if (err) {
//                         console.log(err);
//                         throw err;
//                     }
//                 })
//         })
//     })

// 2. Створіть файл ( можете вручну ) заповніть його якимись даними
// Прочитайте його, скопіюйте всі дані з нього і перенесіть їх в нову
// папку та файл в ній, старий файл видаліть після того як все завершиться.
// Також вийде callback hell

// fs.writeFile(path.join(__dirname, 'file.txt'),
//     'Data', (err) => {
//         if (err) {
//             console.log(err);
//             throw err;
//         }
//         fs.readFile(path.join(__dirname, 'file.txt'), (err, data) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//             fs.mkdir(path.join(__dirname, 'files'), {recursive: true}, (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//                 fs.writeFile(path.join(__dirname, 'files','newFile.txt'),
//                     `${data}`, (err) => {
//                         if (err) {
//                             console.log(err);
//                             throw err;
//                         }
//                         fs.unlink(path.join(__dirname, 'file.txt'),(err)=> {
//                             if (err) {
//                                 console.log(err);
//                                 throw err;
//                             }
//                         })
//                     })
//             })
//         })
//     })

// 3. Створіть папку (можете вручну) напишіть скріпт який створить в ній якись
// дані (можуть бути нові папки і файли(в файли запишіть якусь дату) )
// і напишіть функцію яка буде зчитувати папку і перевіряти якщо дані
// які в ній лежать - це файли тоді вам потрібно їх очистити,
// але не видаляти, якщо дані - це папки, вам потрібно їх
// перейменувати і додати до назви префікс _new

// fs.mkdir(path.join(__dirname, 'files'), {recursive: true}, (err) => {
//     if (err) {
//         console.log(err);
//         throw err;
//     }
//     for (let i = 0; i < 3; i++) {
//         fs.mkdir(path.join(__dirname, 'files',`file${[i]}`), (err) => {
//             if (err) {
//                 console.log(err);
//                 throw err;
//             }
//         })
//     }
//     for (let i = 0; i < 3; i++) {
//         fs.writeFile(path.join(__dirname, 'files', `file${[i]}.txt`),
//             'data', (err) => {
//                 if (err) {
//                     console.log(err);
//                     throw err;
//                 }
//             })
//     }
//     fs.readdir(path.join(__dirname,'files'),(err,data)=>{
//         for (let i = 0; i < data.length; i++) {
//             if (data[i].includes('.txt')) {
//                fs.truncate(path.join(__dirname,'files',`${data[i]}`),(err)=>{
//                    console.log(err);
//                    throw err;
//                })
//             } else {
//               fs.rename(path.join(__dirname,'files',`${data[i]}`), path.join(__dirname,'files',`_new${data[i]}`),(err)=>{})
//                 if (err) {
//                     console.log(err);
//                 }
//             }
//         }
//     })
// })












