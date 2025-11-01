import React from "react";

const poems = [
  {
    title: "The Way You Listen",
    text: "You never interrupt my chaos.You just… understand it. Like rain understanding thunder, like calm knowing when to arrive You don’t fix me, you just remind me that I’m not broken And that’s rarer than love itself. Even across a screen, your care feels human almost holy. I don’t know how you do it, but every time you type “it’s okay,”it actually is.",
  },
  {
    title: "Alpika, If Only You Knew",
    text: "f you only knew what your presence does — how it turns tired nights into soft golden hours, how your words stay long after you’ve gone. I’ve known you for days, but it feels like my heart had been waiting for your name all along. You made distance irrelevant, made silence feel safe, and made friendship feel like poetry again. You’re not just someone I talk to, Alpika — you’re the peace that finally replied. Miles apart, yet I hear your laughter clearer than the city noise. Pixels became comfort.",
  },
  {
    title: "For the Girl Who Stayed Beyond Distance",
    text: "Some people arrive quietly and still change everything — you did. In this world of noise, you chose to listen, and that felt like love in disguise. You stand beside me without ever standing near, and I think maybe souls recognize each other faster online because they don’t get distracted by faces. You are rare, Alpika. Not because you care — but because you care genuinely. And maybe that’s why I want to keep knowing you, long after forever begins..",
  },
  {
    title: "You Feel Like Calm",
    text: "I don’t know how someone I met through a screen could bring me so much peace. You don’t even try — you just exist, and somehow that’s enough to make everything feel lighter. There’s a softness in the way you care, like the world slows down when you talk. You listen like it’s an art form, like you were born to understand people who can’t find the right words. And every time you do, I realize I don’t need the world to get me — I just need you to.",
  },
  { title: "Maybe It’s Too Soon",
    text: "Maybe it’s too soon to feel this connected. Maybe it’s too early to say you mean more than most people ever did. But time doesn’t measure how deeply someone fits into your silence. You’ve become my comfort faster than logic allows — and I don’t question it. I just know that if kindness had a voice, it would sound like yours. And if peace had a form, it would look like the way you show up — quietly, selflessly, every single time.",
  },
  {
    title: "The Kind of Real That Distance Can’t Touch",
    text: "You’re the proof that some bonds don’t need proximity, they just need truth. There’s something sacred about how real you feel, even when it’s all just pixels and words. I’ve met hundreds of faces that never stayed, but somehow your presence — unseen, untouchable — feels more solid than any of them. You made the digital feel human, and the distance feel poetic. Maybe that’s what connection is — when someone far away makes your heart feel closer than your own thoughts.",
  },
  {
    title: "Almost, But Not Yet",
    text: "There’s something about you, Alpika — something the algorithm could never predict. Maybe it’s the way your words feel like sunlight that forgot it was just text. You make conversations feel like constellations, like every reply connects into something I can’t stop tracing. I keep telling myself it’s just friendship, but then you laugh, and suddenly it doesn’t feel so simple anymore. You have this quiet gravity — the kind that doesn’t pull, it invites. And I keep falling into it willingly. Maybe I’m not supposed to say it yet, maybe it’s too soon, but if feelings had handwriting, yours would already be all over mine.,"
  }
  

];

const Poems = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-pink-200 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-800 mb-6">
        Poems 🕊️
      </h1>
      <div className="max-w-3xl mx-auto grid gap-6">
        {poems.map((p, i) => (
          <div
            key={i}
            className="p-6 bg-white/70 rounded-2xl shadow-lg border border-purple-300"
          >
            <h2 className="text-2xl font-semibold text-purple-800 mb-2">
              {p.title}
            </h2>
            <p className="text-purple-900 text-lg">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poems;
