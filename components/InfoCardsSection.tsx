import InfoCard from "./InfoCard";

export interface InfoCardsData {
  label: string;
  value: string;
  note: string;
}

export interface InfoCardsSectionProps {
  cards: InfoCardsData[];
}

export default function InfoCardsSection({ cards }: InfoCardsSectionProps) {
  return (
    <section className="mt-8 grid gap-6 md:grid-cols-3">
      {cards.map((card) => (
        <InfoCard
          key={card.label}
          label={card.label}
          value={card.value}
          note={card.note}
        />
      ))}
    </section>
  );
}
