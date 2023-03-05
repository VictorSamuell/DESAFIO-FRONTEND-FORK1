import "./Sobre.css";
import {BrowserRouter, Routes, Link, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function Sobre() {
    return(
        <section className='secaosobre'>
            <div className='containersobre'>
                <div className='textsobre'>
                    <h2 className="h2sobre"> Sistema Único de Saúde (SUS)</h2>
                    <p className="psobre"> I used to rule the world
Seas would rise when I gave the word
Now in the morning I sleep alone
Sweep the streets I used to own

I used to roll the dice
Feel the fear in my enemy's eyes
Listened as the crowd would sing
Now the old king is dead!
Long live the king!

One minute I held the key
Next the walls were closed on me
And I discovered that my castles stand
Upon pillars of salt and pillars of sand

I hear Jerusalem bells are ringing
Roman Cavalry choirs are singing
Be my mirror, my sword and shield
My missionaries in a foreign field

For some reason I can't explain
Once you'd gone, there was never
Never an honest word
That was when I ruled the world

It was the wicked and wild wind
Blew down the doors to let me in
Shattered windows and the sound of drums
People couldn't believe what I'd become

Revolutionaries wait
For my head on a silver plate
Just a puppet on a lonely string
Oh, who would ever want to be king?

I hear Jerusalem bells are ringing
Roman Cavalry choirs are singing
Be my mirror, my sword and shield
My missionaries in a foreign field

For some reason I can't explain
I know Saint Peter won't call my name
Never an honest word
But that was when I ruled the world

Ooh, ooh, ooh, ooh

Hear Jerusalem bells are ringing
Roman Cavalry choirs are singing
Be my mirror, my sword and shield
My missionaries in a foreign field

For some reason I can't explain
I know Saint Peter won't call my name
Never an honest word
But that was when I ruled the world </p>

                </div>
        <div className="deletesobre">
       
        
        </div>

            </div>
        </section>   
        
    )
}

export default Sobre;