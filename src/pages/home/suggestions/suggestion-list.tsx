import { SuggestionItem } from './suggestion-item'
import { Suggestion } from './utils'

type Props = {
  suggestions: Array<Suggestion>
}

export const SuggestionList = ({ suggestions }: Props) => {
  return (
    <div className='flex flex-col gap-4'>
      {suggestions.map(suggestion => {
        return (
          <SuggestionItem
            key={suggestion.username}
            profilePicture={suggestion.profilePicture}
            username={suggestion.username}
          />
        )
      })}
    </div>
  )
}
