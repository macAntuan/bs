

const pEctinia = 'Просительная ектинья';
const vEctinia = '<h2>Великая ектинья</h2><div><p class = "diak">Ми́ром Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О свы́шнем ми́ре и спасе́нии душ на́ших, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О ми́ре всего́ мiра, благостоя́нии святы́х Бо́жиих церкве́й и соедине́нии всех, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О святе́м хра́ме сем и с ве́рою, благогове́нием и стра́хом Бо́жиим входя́щих в онь, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О Вели́ком Господи́не и отце́ на́шем Святе́йшем Патриа́рхе (имярек), и о господи́не на́шем преосвяще́ннейшем митрополи́те (или архиепи́скопе, или епи́скопе) (имярек), честне́м пресви́терстве, во Христе́ диа́констве, о всем при́чте и лю́дех, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О Богохрани́мей стране́ на́шей, власте́х и во́инстве ея́, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О граде́ сем (или о ве́си сей, или о святе́й оби́тели сей), вся́ком гра́де, стране́ и ве́рою живу́щих в них, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О бла́горастворе́нии возду́хов, о изоби́лии плодо́в земны́х и вре́менех ми́рных, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О пла́вающих, путеше́ствующих, неду́гующих, стра́ждущих, плене́нных и о спасе́нии их, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">О изба́витися нам от вся́кия ско́рби, гне́ва и ну́жды, Го́споду помо́лимся</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">Заступи́, спаси́, поми́луй и сохрани́ нас, Бо́же, Твое́ю благода́тию</p><p class = "chor"><span class="red">Хор</span> Го́споди, поми́луй</p></div><div><p class = "diak">Пресвяту́ю, пречи́стую, преблагослове́нную, сла́вную Влады́чицу на́шу Богоро́дицу и Присноде́ву Мари́ю со все́ми святы́ми помяну́вше, са́ми себе́ и друг дру́га, и весь живо́т наш Христу́ Бо́гу предади́м.</p><p class = "chor"><span class="red">Хор</span> Тебе́, Го́споди</p></div><div><p class = "ier">Священник Я́ко подоба́ет Тебе́ вся́кая сла́ва, честь, и поклоне́ние, Отцу́, и Сы́ну, и Свято́му Ду́ху, ны́не и при́сно, и во ве́ки веко́в.</p>';

function cont(mol) {
let part = document.querySelector('.part');
part.innerHTML = mol;
}

const ect = () => {
  return (
    '<h2>Сугубая ектиния</h2>
<p class = "diak"> Рцем вси́ от всея́ души́, и от всего́ помышле́ния на́шего рцем.</p>
<p class = "chor"p>Лик: Го́споди, поми́луй.</p>
<p class = "diak">Го́споди Вседержи́телю, Бо́же оте́ц на́ших, мо́лим Ти ся, услы́ши и поми́луй.</p>
<p class = "chor">Лик: Го́споди, поми́луй.</p>
<p class = "diak">Поми́луй нас, Бо́же, по вели́цей ми́лости Твое́й, мо́лим Ти ся, услы́ши и поми́луй.</p>
<p class = "chor">Лик: Го́споди, поми́луй, трижды.</p>
<p class = "diak">Еще́ мо́лимся о Вели́ком Господи́не и отце́ на́шем, Святе́йшем Патриа́рхе (имярек), и о господи́не на́шем преосвяще́ннейшем митрополи́те (или архиепи́скопе, или епи́скопе) (имя рек), и о всей во Христе́ бра́тии на́шей.</p>
<p class = "chor">Лик: Го́споди, поми́луй, трижды.</p>
<p class = "diak">Еще́ мо́лимся о Богохрани́мей стране́ на́шей, власте́х и во́инстве ея́, да ти́хое и безмо́лвное житие́ поживе́м во вся́ком благоче́стии и чистоте́.</p>
<p class = "chor">Лик: Го́споди, поми́луй, трижды.</p>
<p class = "diak">Еще́ мо́лимся о бра́тиях на́ших, свяще́нницех, священномона́сех, и всем во Христе́ бра́тстве на́шем.</p>
<p class = "chor">Лик: Го́споди, поми́луй, трижды.</p>
<p class = "diak">Еще́ мо́лимся о блаже́нных и приснопа́мятных святе́йших патриа́рсех правосла́вных и созда́телех свята́го хра́ма сего́ (аще во обители: святы́я оби́тели сея́), и о всех пре́жде почи́вших отце́х и бра́тиях, зде лежа́щих и повсю́ду, правосла́вных.</p>
<p class = "chor">Лик: Го́споди, поми́луй, трижды.</p>
<p class = "diak">Еще́ мо́лимся о ми́лости, жи́зни, ми́ре, здра́вии, спасе́нии, посеще́нии, проще́нии и оставле́нии грехо́в рабо́в Бо́жиих, бра́тии свята́го хра́ма сего́ (аще во обители: святы́я оби́тели сея́).</p>
<p class = "chor">Лик: Го́споди, поми́луй, трижды.</p>
<p class = "diak">Еще́ мо́лимся о плодонося́щих и доброде́ющих во святе́м и всечестне́м хра́ме сем, тружда́ющихся, пою́щих и предстоя́щих лю́дех, ожида́ющих от Тебе́ вели́кия и бога́тыя ми́лости.</p>
<p class = "chor">Лик: Го́споди, поми́луй, трижды.</p>'

    )
  
}


cont(vEctinia);

