import ChallengeCards from "./components/ChallengeCards";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Peerlist Aceternity UI Challenge
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Recreating 5 days of beautiful UI components with animations
          </p>
        </header>

        <ChallengeCards />

        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            Challenge inspired by{" "}
            <a
              href="https://peerlist.io/challenges/ui-animation-challenge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Peerlist x Aceternity UI Challenge
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
