export default function Writing() {
  const posts = [
    {
      title: "Sample Post 1",
      excerpt: "This is where you can add a brief preview of your first blog post...",
      date: "2024-01-10",
    },
    {
      title: "Sample Post 2",
      excerpt: "A preview of another fascinating article you've written...",
      date: "2024-01-09",
    },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold text-gray-900">Writing</h1>
      <p className="text-xl text-gray-600">
        Here's where I share my thoughts and ideas about various topics.
      </p>
      
      <div className="mt-8 space-y-8">
        {posts.map((post, index) => (
          <article key={index} className="border-b border-gray-200 pb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <time className="text-sm text-gray-500">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  )
} 