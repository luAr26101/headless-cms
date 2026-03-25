import * as contentful from "contentful";
import { useState, useEffect } from "react";

const client = contentful.createClient({
  space: import.meta.env.VITE_SPACE,
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const data = await client.getEntries({
        content_type: "projects",
      });

      const projects = data.items.map((project) => ({
        id: project.sys.id,
        title: project.fields.title,
        url: project.fields.url,
        image: project.fields.image?.fields?.file?.url,
      }));
      setProjects(projects);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    loading,
    projects,
  };
};
