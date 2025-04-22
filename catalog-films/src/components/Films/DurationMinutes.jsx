export const formatDuration = (minutes) => {
    if (!minutes) return "Indisponível";
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h > 0 ? `${h}h ` : ""}${m}m`;
  };
  