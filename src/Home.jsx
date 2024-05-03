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
        <h1 className="transition">What We Do</h1>
        <p className="p1">
          You love your plants, but it can be hard to remember when you last watered or when you need to water again.
        </p>
        <p className="p2">We take care of that for you!</p>
        <p className="p3">
          Simply find your plants in our list, check how often you need to water and add them to your schedule.
        </p>
      </div>
      <div className="water">
        <h1 className="transition">How much water?</h1>
        <p className="p1">Over-watering can be worse than under-watering!</p>
        <p className="p2">
          Water them until you notice water draining out of the bottom. That means the soil has absorbed all the water
          it can hold.
        </p>
      </div>
      <Footer />
    </div>
  );
}
