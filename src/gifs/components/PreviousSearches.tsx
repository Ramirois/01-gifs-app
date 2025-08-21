interface Props {
  searches: string[];
  onLabelClicked: (search:string) => void;
}

export const PreviousSearches = ({ searches, onLabelClicked }: Props) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas previas</h2>
      <ul className="previous-searches-list">
        {
            searches.map((search) => (
                <li key={search}
                    onClick={() => onLabelClicked(search)}
                >{search}</li>
            ))
        }
      </ul>
    </div>
  );
};
