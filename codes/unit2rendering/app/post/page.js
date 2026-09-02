import React from 'react';

export default async function Post() {
  const data = await fetch('https://dummyjson.com/recipes');
  const productdata = await data.json();

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="mx-auto max-w-7xl pb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
          Featured Recipes
        </h1>
        <p className="mt-3 text-lg text-neutral-600">
          Explore delicious recipes fetched directly from our kitchen database.
        </p>
      </header>

      {/* Recipe Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productdata.recipes.map((item) => (
          <article
            key={item.id}
            className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200/60 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Image & Badges */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-neutral-400">
                  No Image Available
                </div>
              )}
              <span className="absolute top-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                #{item.id}
              </span>
              {item.difficulty && (
                <span className="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-0.5 text-xs font-semibold text-neutral-700 shadow-sm backdrop-blur-sm">
                  {item.difficulty}
                </span>
              )}
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                <span>{item.cuisine || 'Global'}</span>
                <span>{item.cookTimeMinutes ? `${item.cookTimeMinutes} mins` : ''}</span>
              </div>

              <h2 className="text-xl font-bold text-neutral-900 line-clamp-1">
                {item.name}
              </h2>

              {/* Ingredients List */}
              <div className="mt-3 flex-1">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Ingredients
                </h3>
                <p className="mt-1 text-sm text-neutral-600 line-clamp-3 leading-relaxed">
                  {Array.isArray(item.ingredients)
                    ? item.ingredients.join(', ')
                    : item.ingredients}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 border-t border-neutral-100 pt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-amber-600">
                  ★ {item.rating || 'N/A'}
                </span>
                <button
                  type="button"
                  className="rounded-lg bg-amber-500 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
                >
                  View Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}