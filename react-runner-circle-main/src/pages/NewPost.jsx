import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import BottomNavigation from '../components/layout/BottomNavigation'
import NewPostForm from '../components/forms/NewPostForm'
import { useMutation } from '@apollo/client'
import { GET_FEED, GET_FEED_BY_CATEGORY } from '../../database/graphql/query/feed'

function NewPost({ onNavigateToFeed }) {
  const [addFeedPost, { savingPost }] = useMutation(ADD_FEED_POST, {
    refetchQueries: [{query: GET_FEED}, {query, GET_FEED_BY_CATEGORY}],
    update(cache, { data: { createFeed } }) {
      try {
        const existingFeed = cache.readQuery({ query: GET_FEED });
        if (!existingFeed) {
          cache.writeQuery({
            query: GET_FEED,
            data: {
              feed: [...existingFeed.feed, createFeed]
            }
          });
        }
      } catch (error) {
        console.error('Error updating cache:', error);
      }

      try {
        const existingCategoryFeed = 
          cache.readQuery({ 
            query: GET_FEED_BY_CATEGORY, 
            variables: { category: createFeed.category } 
          });
          if (existingCategoryFeed) {
            cache.writeQuery({
              query: GET_FEED_BY_CATEGORY,
              variables: { category: createFeed.category },
              data: {
                feedByCategory: [...existingCategoryFeed.feedByCategory, createFeed]
              }
            });
          }
      } catch (error) { 
        console.error('Error updating category cache:', error);
      }
    }
  });
  
  const handleSubmit = async (formData) => {
    try {
      const formParam = {
        user: {
          id: 1,
          name: 'Ana Silva Correia',
        },
        time: parseInt(formData.tempo) * 60,
        stats: {
          distance: formData.distancia + ' Km',
          calories: formData.calorias + ' Kcal',
          heartRate: formData.bpm + ' BPM',
        },
        category: formData.tipoTreino,
        description: formData.descricao,
        timestamp: new Date().toISOString(),
      };

      await addFeedPost({ variables: formParam });
      onNavigateToFeed?.();
    } catch (error) {
      console.error('Error ao salvar treino:', error);
    }
  }

  const handleCancel = () => {
    onNavigateToFeed?.()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex">
        {/* Desktop Sidebar */}
        <Sidebar activeItem="feed" />
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 pb-20 md:pb-6">
          <div className="max-w-4xl mx-auto">
            <NewPostForm 
              onSubmit={handleSubmit}
              onCancel={handleCancel}
            />
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation activeItem="feed" />
    </div>
  )
}

export default NewPost