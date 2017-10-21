function BookLookup(amazomService){
    this.amazomService = amazomService
    this.search = (isbn)=>{
        var infoBook = this.amazomService(isbn)
        return {bookName : infoBook.title , cover : infoBook.image , isbn: infoBook.isbn}
    }

}
test('AmazomService should return title,image,isbn When intput isbn',()=>{

    const returnObject = {
        title: 'Doraemon',
        image: '001.png',
        isbn: '001'
    }
    var isbn = '001'

    const mockFn = jest.fn(isbn).mockReturnValue(returnObject)
    
    var app = new BookLookup(mockFn)
    var result = app.search(isbn)

    expect(result.bookName).toBe(returnObject.title)
    expect(result.cover).toBe(returnObject.image)
    expect(result.isbn).toBe(returnObject.isbn)
    expect(mockFn).toHaveBeenCalled()
    expect(mockFn).toHaveBeenCalledWith(isbn)


})