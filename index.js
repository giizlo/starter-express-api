const { Telegraf } = require('telegraf');
const { Markup } = require('telegraf');
var fs = require('fs');

const bot = new Telegraf('5610129238:AAEjPARVVloLduw3p8KkhpD0E1c4G3IkpEc');
let id = 0

const contactKeyboardTwo = 

// bot.on('callback_query', async (ctx) => {
//     if (ctx.callbackQuery.id == 'option1') {
//         return ctx.answerCbQuery('Option 1 selected!');
//     } 
//   });

bot.command('/start', async (ctx) =>
    ctx.replyWithHTML('Выберете нужную категорию',
    {parse_mode: "html",
    reply_markup: JSON.stringify({
        inline_keyboard: [[{ text: 'Информация для 10-х классов', callback_data: 'start_10' }],
                        [{ text: 'Информация для 11-х классов', callback_data: 'start_11' }]]  })
    },
    Markup.keyboard([['Информация для 10-х классов'],['Информация для 11-х классов']]).resize())
    );


// [{ text: '---', callback_data: 'option1' }, { text: 'Find', url: 'https://www.google.com' }],
// [{ text: 'Chart', url: 'https://www.google.com' }]

function Send1(ctx, mes, buttons = [])
{
    let contactKeyboardTwo = ''
    if (buttons != []) {
    contactKeyboardTwo = {
        parse_mode: "html",
        reply_markup: JSON.stringify({
            inline_keyboard: buttons})}}
    return ctx.replyWithHTML(mes, contactKeyboardTwo);
};

bot.hears('Информация для 10-х классов', async (ctx) => {
    let sent = await Send1(ctx, '<b>Ваш вопрос:</b>', 
    [[{ text: 'График проведения конференции', callback_data: 'time_10' }],
    [{ text: 'Возрастные группы', callback_data: 'age_10' }],
    [{ text: 'Секции', callback_data: 'sections_10' }],
    [{ text: 'Шаблон презентации в стиле  Проектной школы ФГБОУ ВО «МГТУ им. Г.И. Носова»', url: 'https://www.google.com' }],
    [{ text: 'Шаблон презентации в стиле ФГБОУ ВО «МГТУ им. Г.И. Носова»', url: 'https://www.google.com' }],
    [{ text: 'Требования к оформлению тезисов', callback_data: 'tez_10' }],
    [{ text: 'Требования к оформлению паспорта проектов', callback_data: 'pasp_10' }],
    [{ text: 'Критерии оценки', callback_data: 'marks_10' }],
    [{ text: 'Ознакомиться с проектами 10 класса (2021-2022 уч.год)', url: 'https://www.google.com' }]]
    )

    // id = ctx.message.message_id;
    // console.log(ctx.message.message_id);
});



bot.action('start_10', async (ctx) => {
    let sent = await Send1(ctx, '<b>Ваш вопрос:</b>', 
    [[{ text: 'График проведения конференции', callback_data: 'time_10' }],
    [{ text: 'Возрастные группы', callback_data: 'age_10' }],
    [{ text: 'Секции', callback_data: 'sections_10' }],
    [{ text: 'Шаблон презентации в стиле  Проектной школы ФГБОУ ВО «МГТУ им. Г.И. Носова»', url: 'https://www.google.com' }],
    [{ text: 'Шаблон презентации в стиле ФГБОУ ВО «МГТУ им. Г.И. Носова»', url: 'https://www.google.com' }],
    [{ text: 'Требования к оформлению тезисов', callback_data: 'tez_10' }],
    [{ text: 'Требования к оформлению паспорта проектов', callback_data: 'pasp_10' }],
    [{ text: 'Критерии оценки', callback_data: 'marks_10' }],
    [{ text: 'Ознакомиться с проектами 10 класса (2021-2022 уч.год)', url: 'https://www.google.com' }]]
    )

    // id = ctx.message.message_id;
    // console.log(ctx.message.message_id);
});


bot.action('delete_10', async (ctx) => {
    console.log(ctx.update.callback_query.message)
    ctx.telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
    await Send1(ctx, '<b>Ваш вопрос:</b>', 
    [[{ text: 'График проведения конференции', callback_data: 'time_10' }],
    [{ text: 'Возрастные группы', callback_data: 'age_10' }],
    [{ text: 'Секции', callback_data: 'sections_10' }],
    [{ text: 'Шаблон презентации в стиле  Проектной школы ФГБОУ ВО «МГТУ им. Г.И. Носова»', url: 'https://www.google.com' }],
    [{ text: 'Шаблон презентации в стиле ФГБОУ ВО «МГТУ им. Г.И. Носова»', url: 'https://www.magtu.ru/brendbuk/korporativnyj-stil.html#prezentatsii' }],
    [{ text: 'Требования к оформлению тезисов', callback_data: 'tez_10' }],
    [{ text: 'Требования к оформлению паспорта проектов', callback_data: 'pasp_10' }],
    [{ text: 'Критерии оценки', callback_data: 'marks_10' }],
    [{ text: 'Ознакомиться с проектами 10 класса (2021-2022 уч.год)', url: 'https://www.google.com' }]]
    )
    // ctx.sendMessage('Option 1 selected!');
})

bot.action('time_10', (ctx) => {
    ctx.telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
    fs.readFile('./files/time_10.html', function(err, html) {
        if (err) throw err;
        let json = JSON.stringify(html);
        let bufferOriginal = Buffer.from(JSON.parse(json).data);
        Send1(ctx, bufferOriginal.toString('utf8'), [[{ text: 'Меню', callback_data: 'delete_10' }]]);
    });
})

bot.action('age_10', (ctx) => {
    ctx.telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
    fs.readFile('./files/age_10.html', function(err, html) {
        if (err) throw err;
        let json = JSON.stringify(html);
        let bufferOriginal = Buffer.from(JSON.parse(json).data);
        Send1(ctx, bufferOriginal.toString('utf8'), [[{ text: 'Меню', callback_data: 'delete_10' }]]);
    });
})

bot.action('sections_10', (ctx) => {
    ctx.telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
    fs.readFile('./files/sections_10.html', function(err, html) {
        if (err) throw err;
        let json = JSON.stringify(html);
        let bufferOriginal = Buffer.from(JSON.parse(json).data);
        Send1(ctx, bufferOriginal.toString('utf8'), [[{ text: 'Меню', callback_data: 'delete_10' }]]);
    });
})


bot.action('tez_10', (ctx) => {
    ctx.telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
    fs.readFile('./files/tez_10.html', function(err, html) {
        if (err) throw err;
        let json = JSON.stringify(html);
        let bufferOriginal = Buffer.from(JSON.parse(json).data);
        Send1(ctx, bufferOriginal.toString('utf8'), [[{ text: 'Меню', callback_data: 'delete_10' }]]);
    });
})

bot.action('pasp_10', (ctx) => {
    ctx.telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
    fs.readFile('./files/pasp_10.html', function(err, html) {
        if (err) throw err;
        let json = JSON.stringify(html);
        let bufferOriginal = Buffer.from(JSON.parse(json).data);
        Send1(ctx, bufferOriginal.toString('utf8'), [[{ text: 'Меню', callback_data: 'delete_10' }]]);
    });
})

bot.action('marks_10', (ctx) => {
    ctx.telegram.deleteMessage(ctx.update.callback_query.message.chat.id, ctx.update.callback_query.message.message_id);
    fs.readFile('./files/marks_10.html', function(err, html) {
        if (err) throw err;
        let json = JSON.stringify(html);
        let bufferOriginal = Buffer.from(JSON.parse(json).data);
        Send1(ctx, bufferOriginal.toString('utf8'), [[{ text: 'Меню', callback_data: 'delete_10' }]]);
    });
})

bot.launch();
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
