Rails.application.routes.draw do
  get '/', to: 'posts#index'

  resources :authors, only: [:show]
  resources :posts, except: [:delete]

  get 'posts/:id/post_data', to: 'posts#post_data'
end
