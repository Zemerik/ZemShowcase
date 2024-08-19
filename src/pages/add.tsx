import Head from 'next/head'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { useState, ChangeEvent, FormEvent } from 'react'

interface FormData {
  title: string
  banner: string
  img: string
  icon: string
  blog: string
  github: string
  web: string
  description: string
}

type FormField = keyof FormData

export default function Contacts() {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    banner: '',
    img: '',
    icon: '',
    blog: '',
    github: '',
    web: '',
    description: '',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    } as Pick<FormData, keyof FormData>)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Add form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <>
      <Head>
        <title>ZemShowcase - Add New Project</title>
        <meta name="description" content="Add your project" />
        <meta property="og:title" content="Add New Project" />
        <meta property="og:description" content="Add your project" />
      </Head>

      <ScrollTop />

      <main className="form-container">
        <h1 className="form-title">Add New Project</h1>
        <form onSubmit={handleSubmit} className="form">
          {[
            { name: 'title', label: 'Title', type: 'text' },
            { name: 'banner', label: 'Banner URL', type: 'url' },
            { name: 'img', label: 'Image URL', type: 'url' },
            { name: 'icon', label: 'Icon URL', type: 'url' },
            { name: 'blog', label: 'Blog URL', type: 'url' },
            { name: 'github', label: 'GitHub URL', type: 'url' },
            { name: 'web', label: 'Website URL', type: 'url' },
            { name: 'description', label: 'Description', type: 'textarea' },
          ].map((field) => (
            <div key={field.name} className="form-field">
              <label htmlFor={field.name} className="form-label">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name as FormField]}
                  onChange={handleChange}
                  required
                  className="form-input"
                  style={{resize:'none'}}
                  rows={4}
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name as FormField]}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              )}
            </div>
          ))}
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </main>

      <Footer />
      <style jsx>{`
        .form-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        .form-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .form {
          display: flex;
          flex-direction: column;
        }
        .form-field {
          margin-bottom: 20px;
        }
        .form-label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
        .form-input {
          width: 100%;
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .form-button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        .form-button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </>
  )
}