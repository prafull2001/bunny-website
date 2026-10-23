import { Link } from 'react-router-dom';
import { appStoreLink } from '../seo/siteConfig';
import screenshotPet from '../assets/screenshot-pet.webp';

export const VIRTUAL_PET_NAMES_GUIDE = {
  slug: 'virtual-pet-names-for-couples',
  ogImage: '/og/og-pet-names.jpg',
  title: '24 Virtual Pet Names to Choose Together in Bunny',
  metaDescription: 'Name your shared Bunny pet together. Browse 24 food, nature, silly and Japanese name ideas, check their meanings and learn how to change your pet’s name.',
  excerpt: 'Biscuit, Clover or Mochi? Pick a name for the little pet you care for together, with 24 ideas and a simple way to choose as a couple.',
  datePublished: '2026-10-23',
  dateModified: '2026-10-23',
  author: 'Prafull Sharma',
  readingTime: '4 min read',
  tags: ['Shared pet', 'Bunny guide'],
  faq: [
    { q: 'What are good virtual pet names for couples?', a: 'Biscuit, Clover, Pip and Mochi are a few starting points. Choose a name that reminds both of you of something: a favorite snack, a place or a small joke. In Bunny, you can name the pet you care for together and change its name later.' },
    { q: 'Can we change our pet’s name in Bunny?', a: 'Yes. Open your pet, tap the pencil in the top-right corner, enter a name and tap Save. The name belongs to your shared pet. Use an internet connection when saving the change.' },
    { q: 'What are some Japanese names for a virtual bunny?', a: 'Try Haru (はる, 春: spring), Momo (もも, 桃: peach), Hana (はな, 花: flower), Sora (そら, 空: sky), Yuki (ゆき, 雪: snow) or Mochi (もち, 餅: rice cake). These are ordinary Japanese words suggested as pet nicknames, with the intended spellings and meanings shown.' },
    { q: 'Does Bunny have a Japanese interface?', a: 'Bunny’s interface and built-in text are currently in English. Choosing a Japanese pet name does not translate the app. Bunny is available on supported iPhones and iPads; there is no Android version.' },
  ],
  Content: () => (
    <>
      <p className="lede">A shared pet needs a name you both enjoy saying. Try Biscuit for a snack-inspired bunny, Clover for a little nature name or Pip for something short and cheerful. Bunny lets you name one pet and care for it together on your own iPhones or iPads, with basic bunny care available for free.</p>
      <p>Here are 24 ideas to choose from. Start with the group that sounds like the two of you, then use the short choosing exercise below to settle on one.</p>
      <a href={appStoreLink('blog', 'virtual-pet-names-for-couples')} className="app-store-badge" aria-label="Download Bunny on the App Store" />

      <h2>Six names for couples who plan around snacks</h2>
      <ul>
        <li><strong>Biscuit:</strong> for your shared tea-and-snack habit.</li>
        <li><strong>Waffles:</strong> a reminder of slow breakfasts together.</li>
        <li><strong>Pickle:</strong> a slightly ridiculous name you can say with a straight face.</li>
        <li><strong>Noodle:</strong> for a pet named after your favorite dinner.</li>
        <li><strong>Crumble:</strong> a cozy dessert name with a little bounce.</li>
        <li><strong>Pudding:</strong> a soft-sounding choice for a little bunny.</li>
      </ul>

      <h2>Six little nature names</h2>
      <ul>
        <li><strong>Clover:</strong> for a bunny with an imaginary patch of green.</li>
        <li><strong>Pebble:</strong> a tiny name that might remind you of a beach walk.</li>
        <li><strong>Poppy:</strong> bright and easy to call out.</li>
        <li><strong>Sunny:</strong> for the little hello in your day.</li>
        <li><strong>Acorn:</strong> small enough to fit a pocket-sized companion.</li>
        <li><strong>Willow:</strong> a gentle name, especially if you share a favorite tree or park.</li>
      </ul>

      <h2>Six names that don’t take themselves seriously</h2>
      <ul>
        <li><strong>Pip:</strong> three letters, easy to type and remember.</li>
        <li><strong>Button:</strong> for something small you both find endearing.</li>
        <li><strong>Niblet:</strong> a tiny-sounding name for your tiny shared responsibility.</li>
        <li><strong>Wiggles:</strong> fun to say, whether your bunny is busy or resting.</li>
        <li><strong>Puddle:</strong> a silly name with no explanation required.</li>
        <li><strong>Boop:</strong> a name that sounds like a greeting.</li>
      </ul>

      <h2>Six Japanese words to use as pet nicknames</h2>
      <p>These are everyday Japanese words with simple meanings. The kana and kanji below identify the intended word; each link opens its dictionary entry.</p>
      <ul>
        <li><strong>Haru:</strong> <span lang="ja">はる（春）</span>, meaning <a href="https://kotobank.jp/word/%E6%98%A5-529620">spring</a>. A little seasonal name.</li>
        <li><strong>Momo:</strong> <span lang="ja">もも（桃）</span>, meaning <a href="https://kotobank.jp/word/%E6%A1%83-579378">peach</a>. A fruit-inspired option.</li>
        <li><strong>Hana:</strong> <span lang="ja">はな（花）</span>, meaning <a href="https://kotobank.jp/word/%E8%8A%B1-115580">flower</a>. A choice for the nature list.</li>
        <li><strong>Sora:</strong> <span lang="ja">そら（空）</span>, meaning <a href="https://kotobank.jp/word/%E7%A9%BA-54809">sky</a>. Perhaps a reminder of a walk you took together.</li>
        <li><strong>Yuki:</strong> <span lang="ja">ゆき（雪）</span>, meaning <a href="https://kotobank.jp/word/%E9%9B%AA-144993">snow</a>. A fitting idea for a white bunny.</li>
        <li><strong>Mochi:</strong> <span lang="ja">もち（餅）</span>, meaning <a href="https://kotobank.jp/word/%E9%A4%85-142450">rice cake</a>. Another option for the snack fans.</li>
      </ul>
      <p>The readings and basic meanings come from Shogakukan’s Digital Daijisen entries on Kotobank, checked October 23, 2026. Bunny’s interface and built-in text are currently English. A Japanese nickname does not change the app’s language.</p>

      <h2>Choose together in three small steps</h2>
      <ol>
        <li><strong>Pick three each.</strong> Keep your choices to yourself until both lists are ready, then compare. A shared choice goes straight to the shortlist.</li>
        <li><strong>Give each favorite a reason.</strong> A name becomes more yours when it points to something you share. Maybe Waffles reminds you of a breakfast you tried to cook, or Pebble recalls a particular beach.</li>
        <li><strong>Try it in a sentence.</strong> Say “Have you checked on Clover?” or “I just fed Pip.” Choose the one you both like hearing. If you’re tied, try one for a day and decide together whether to keep it.</li>
      </ol>
      <p>This is a suggestion for choosing together, not a built-in voting game. You can use your usual chat to swap your shortlist.</p>

      <h2>Give your shared Bunny pet its name</h2>
      <p>If you haven’t connected yet, each partner creates a Bunny account. One creates a Love Nest and shares its invite code; the other joins with that code. You then care for the same pet. Our <Link to="/shared-pet-for-couples">shared pet guide</Link> explains the setup and care actions.</p>
      <ol>
        <li>Open your pet from Bunny’s home, or choose <strong>Our pet</strong> in shortcuts.</li>
        <li>Tap the pencil in the top-right corner to open <strong>Rename Pet</strong>.</li>
        <li>Enter your chosen name and tap <strong>Save</strong> while connected to the internet.</li>
      </ol>
      <p>You can return to the pencil to change the name later. It is your shared pet’s name, so agree on the new one together.</p>
      <figure style={{ maxWidth: 240, margin: '24px auto' }}>
        <img src={screenshotPet} alt="Bunny pet care screen showing a pet’s name, mood, Feed, Play and Water controls, and a pencil button" width="720" height="1564" loading="lazy" style={{ borderRadius: 24, height: 'auto' }} />
        <figcaption style={{ marginTop: 12, fontSize: 14 }}>Bunny’s pet care screen. Use the pencil to change your pet’s name.</figcaption>
      </figure>

      <h2>A name, then a little shared routine</h2>
      <p>Start with free basic bunny care: Feed, Play and Water, with cooldowns between actions. You can each check in when you have a moment. For the wider idea of a pet you raise together, read our <Link to="/blog/tamagotchi-for-couples">Tamagotchi-style shared pet guide</Link>.</p>
      <p>Later, you could draw your newly named bunny on the <Link to="/drawing-widgets-for-couples">shared whiteboard</Link>, which requires Bunny Pro. Pro offers an optional one-time lifetime purchase or weekly subscription; <Link to="/pricing">see the free and Pro features</Link>. Both partners need a supported iPhone or iPad. There is currently no Android version.</p>

      <div className="cta-row">
        <h2>Give your little bunny a name</h2>
        <p>Connect with your partner in Bunny, pick a favorite together and start with free basic care.</p>
        <a href={appStoreLink('blog', 'virtual-pet-names-for-couples')} className="app-store-badge" aria-label="Download Bunny on the App Store" />
      </div>
    </>
  ),
};
