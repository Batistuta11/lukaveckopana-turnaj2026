import BackButton from "@/components/BackButton";
import HeroSection from "@/components/HeroSection";
import InfoCardsSection from "@/components/InfoCardsSection";
import InformationSection from "@/components/InformationSection";
import ProposalsSection from "@/components/ProposalsSection";
import ActionButtons from "@/components/ActionButtons";
import tournamentData from "@/content/tournament.json";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-8">
        <BackButton href={tournamentData.mainWebUrl} />

        <HeroSection
          label={tournamentData.hero.label}
          title={tournamentData.hero.title}
          description={tournamentData.hero.description}
          gifPath={tournamentData.hero.gifPath}
        />

        <InfoCardsSection cards={tournamentData.infoCards} />

        <InformationSection
          title={tournamentData.information.title}
          paragraphs={tournamentData.information.paragraphs}
          forTeams={tournamentData.sections.forTeams}
          forVisitors={tournamentData.sections.forVisitors}
        />

        <ProposalsSection
          title={tournamentData.proposals.title}
          description={tournamentData.proposals.description}
          files={tournamentData.proposals.files}
        />

        <ActionButtons
          mainWebUrl={tournamentData.mainWebUrl}
          newsUrl={tournamentData.newsUrl}
        />
      </section>
    </main>
  );
}
