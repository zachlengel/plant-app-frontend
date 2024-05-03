import { Footer } from "./Footer";

export function Home() {
  return (
    <div>
      <div className="homepage">
        <h1 className="transition">Welcome to GrowPro!</h1>
        <p className="p1">Get started by creating an account and logging in.</p>
        <p className="p2"> Next you can browse our collection of plants and add them to your watering schedule! </p>
        <p className="p3">Turning your thumb green since 2024!</p>
      </div>
      <div className="wedo">
        <h1>What We Do</h1>
        <p>
          You love your plants, but it can be hard to remember when you last watered or when you need to water again.
        </p>
        <p>We take care of that for you!</p>
        <p>Simply find your plants in our list, check how often you need to water and add them to your schedule.</p>
      </div>
      <div className="water">
        <h1>How much water do I need to give my plants?</h1>
        <p>Over-watering can be worse than under-watering!</p>
        <p>
          Water them until you notice water draining out of the bottom. That means the soil has absorbed all the water
          it can hold.
        </p>
      </div>
      <Footer />
    </div>
  );
}
